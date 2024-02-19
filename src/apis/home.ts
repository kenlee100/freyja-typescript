import request from "@/utils/request"
import type {  News, Culinary } from '@/types/home'
export const getNews = (): Promise<News[]> => 
  request({
    url: '/api/v1/home/news/',
    method: 'get'
  })
export const getCulinary = (): Promise<Culinary[]> => 
  request({
    url: '/api/v1/home/culinary/',
    method: 'get'
  })