import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://dvopqmcpyjvmwnzangbk.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2b3BxbWNweWp2bXduemFuZ2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU1NTM0MzcsImV4cCI6MTk4MTEyOTQzN30.K3HZl2UbeperXHVKbJyJ0XsWci1T1thetlrmHWS9OM0",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2b3BxbWNweWp2bXduemFuZ2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU1NTM0MzcsImV4cCI6MTk4MTEyOTQzN30.K3HZl2UbeperXHVKbJyJ0XsWci1T1thetlrmHWS9OM0"
    }
})

// Inserido tabela própria, criada em supabase