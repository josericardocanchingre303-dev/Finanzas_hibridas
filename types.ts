
import React from 'react';

export interface Article {
  id: string;
  category: string;
  categoryColor: string;
  level: string;
  time: string;
  date: string;
  title: string;
  desc: string;
  imageUrl: string;
  author: string;
  authorRole: string;
  content: React.ReactNode;
}

export interface MarketData {
  symbol: string;
  change: string;
  exactChange: string;
  isPositive: boolean;
  source: string;
}

export enum AdvisorStatus {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  RESPONDING = 'RESPONDING',
  ERROR = 'ERROR'
}
