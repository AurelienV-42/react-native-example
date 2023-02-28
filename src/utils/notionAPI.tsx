// Get text from Notion API from the url https://aurelienvpro.notion.site/Wording-in-the-future-I-d-like-to-fetch-this-Notion-page-to-fill-the-app-944b5a05bbd9423b8f2da6319903af08
import {NOTION_KEY, NOTION_DATABASE_ID} from '@env';

import {Client} from '@notionhq/client';

if (!NOTION_KEY) {
  console.warn("There's no NOTION_KEY, have you got a .env?");
}
if (!NOTION_DATABASE_ID) {
  console.warn("There's no NOTION_DATABASE_ID, have you got a .env?");
}

const notion = new Client({auth: NOTION_KEY});

const databaseId = NOTION_DATABASE_ID;

const whatKindOfText = (annotations: any) => {
  if (annotations.bold) {
    return 'h1';
  } else if (annotations.italic) {
    return 'h2';
  } else if (annotations.strikethrough) {
    return 'p';
  } else if (annotations.underline) {
    return 'p';
  } else if (annotations.code) {
    return 'p';
  }
  return 'p';
};

const clean_str = (str: string) => {
  while (str[0] === '\n') {
    str = str.slice(1);
  }
  while (str[str.length - 1] === '\n') {
    str = str.slice(0, -1);
  }
  return str;
};

const improve_str = (str: string) => {
  // change all '-' by '👉'
  str = str.replace(/•/g, '👉');
  return str;
};

export const getNotionDatabase = async () => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'order',
          direction: 'ascending',
        },
      ],
    });

    let data = {};
    response.results.map(item => {
      // @ts-ignore
      const properties = item.properties;

      if (properties.language.select) {
        data = {
          ...data,
          [properties.language.select.name]: {
            blog: {
              ...data[properties.language.select.name]?.blog,
              [properties.id.rich_text[0].plain_text]: {
                title: properties.title.title[0].plain_text,
                description: properties.description.rich_text[0].plain_text,
                reading_time: properties.reading_time.number,
                content: properties.content.rich_text.map((text_item: any) => {
                  let text = {};
                  const key = whatKindOfText(text_item?.annotations);
                  text[key] = clean_str(text_item.plain_text);
                  text[key] = improve_str(text[key]);
                  return text;
                }),
              },
            },
          },
        };
      }
    });
    return data;
  } catch (error: auto) {
    console.error(error.body);
  }
};
