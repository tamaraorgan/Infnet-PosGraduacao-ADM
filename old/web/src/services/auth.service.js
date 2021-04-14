//import http from '../config/http'

const authService = data => ({
  data: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV6ZXIubWVsbG9AcHJvZi5pbmZuZXQuZWR1LmJyIiwiaWF0IjoxNjE3NjE3NjQzLCJleHAiOjE2MTc2MTgyNDN9.YRpWemGAIf3ALZI3xzf33OGxmOIDoUCaUys2JY20VwM',
    user: {
      name: 'Tamara Organ',
      email: 'tamara@gmail.com',
      tipo: '2'
    }
  }
})

export default authService
