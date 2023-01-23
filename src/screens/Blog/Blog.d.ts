import React from 'react';

interface BlogType {
  title: string;
  description: string;
  readingTime: number;
  svg?: React.ReactNode;
  littleSvg?: React.ReactNode;
  secondColor?: string;
  mainColor?: string;
}
