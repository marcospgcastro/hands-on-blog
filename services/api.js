import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://lqklcjplyoxgljaoigbc.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxa2xjanBseW94Z2xqYW9pZ2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2MTA1NzEsImV4cCI6MTk4MTE4NjU3MX0.HVfucJfa6fxuFpkF-uMfoURgGANrrrqJxPwf5MNpfRA",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxa2xjanBseW94Z2xqYW9pZ2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2MTA1NzEsImV4cCI6MTk4MTE4NjU3MX0.HVfucJfa6fxuFpkF-uMfoURgGANrrrqJxPwf5MNpfRA"
    }
})

// Inserido tabela própria, criada em supabase