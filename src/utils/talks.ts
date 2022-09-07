export interface ConversationsProps {
  local: string,
  user: string
}

export const conversations: Array<ConversationsProps[]> = [
  [
    {
      local: "Hi, how are you?",
      user: "I am fine and you?"
    },
    {
      local: "Me too. today is a beautiful day, don't you think?",
      user: "Wow, yes! I love to come to the park in the morning"
    },
    {
      local: "I know. I've seen you here a few times. You seem like a nice person",
      user: "Thanks! You too"
    },
    {
      local: "Nice to meet you, my name is Ana",
      user: "Nice to meet you, Anna. my name is Gustavo"
    },
    {
      local: "What do you think about going out for coffee, Gustavo?",
      user: "I would love. Know a cool place?"
    },
    {
      local: "I do. There's a coffee shop close by, you can walk.",
      user: "So let's go?"
    },
    {
      local: "Yes let's go!!",
      user: ""
    },
  ],
  [
    {
      local: "2 Hi, how are you?",
      user: "I'm fine and you?"
    },
    {
      local: "2 me too. today is a beautiful day, don't you think?",
      user: "yes"
    },
  ]
]
