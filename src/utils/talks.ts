export interface ConversationsProps {
  local: string,
  user: string
}

export const conversations: Array<ConversationsProps[]> = [
  [{ local: "", user: "" }],
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
      user: "Nice to meet you, Anna. My name is Gustavo"
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
      local: "Hi! How can I help you?",
      user: "Hi! i would like to buy a new phone"
    },
    {
      local: "Great! look at the showcase to see our options",
      user: "Hmm... I liked that purple one. How much is it?"
    },
    {
      local: "This one costs 1000 dollars",
      user: "Wow! is expensive. And this white?"
    },
    {
      local: "This one costs 800. It's last year's model.",
      user: "Do you think it's worth paying more for the newer model?"
    },
    {
      local: "Honestly, I don't think so. Last year's model meets all needs very well.",
      user: "You're right. I want last year's model"
    },
  ],
  [
    {
      local: "Hello, welcome to our coffee shop",
      user: "Hi, i would like a medium size coffee"
    },
    {
      local: "OK. What kind of coffee?",
      user: "What are the types?"
    },
    {
      local: "Espresso, cappuccino, mocha, double...",
      user: "Okay. The mocha, please"
    },
    {
      local: "Ok. What kind? a traditional, with caramel, with white chocolate, with orange, with...",
      user: "Dude, you have a lot of coffee variations here. I want a traditional"
    },
    {
      local: "Ok. Hot or cold?",
      user: "Hot"
    },
    {
      local: "Ok. Very hot, a little hot or more or less hot?",
      user: "Oh my god i just wanted a simple coffee 😩"
    },
    {
      local: "Ok. What kind? a traditional, with caramel, with white chocolate, with orange, with...",
      user: "I'm gonna cry 😭"
    },
  ],

]

export const historyTitles = [
  '',
  'The park girl',
  'The new phone',
  'Please just a coffee'
]
