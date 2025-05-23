#! /bin/zsh

server_script="cd '$PWD/books-server' && pwd && npm ci && npx prisma generate && npm run dev"
server_term_command="tell app \"Terminal\" to do script \"$server_script\""
osascript -e $server_term_command

client_script="cd '$PWD/books-client' && pwd && npm ci && npm run dev"
client_term_command="tell app \"Terminal\" to do script \"$client_script\""
osascript -e $client_term_command

sleep 2s
open "http://localhost:5173"
