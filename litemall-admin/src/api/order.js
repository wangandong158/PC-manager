import request from '@/utils/request'
import Qs from 'qs'

export function replyComment(data) {
  return request({
    url: '/order/reply',
    method: 'post',
    data
  })
}
