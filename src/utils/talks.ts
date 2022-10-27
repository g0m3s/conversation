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
    }
  ],
  [
    {
      local: "Hi! How can I help you?",
      user: "Hi! i would like to buy a new phone"
    },
    {
      local: "Great! look at the showcase to see our options",
      user: "I liked that purple one. How much is it?"
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
      user: "You are right. I want last year's model"
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
  [
    {
      local: "Hello, welcome to our airline check-in. What's your flight?",
      user: "Hi! my flight is to Brazil at nine o'clock"
    },
    {
      local: "Sorry, did you say nine o'clock?",
      user: "Yes! at 9 a.m."
    },
    {
      local: "Look, boarding for this flight has already been closed 😕. It is no longer possible to enter.",
      user: "What? it's still 8:40. 20 minutes to the flight."
    },
    {
      local: "So... 9 a.m. is the flight departure time. Boarding was until half past eight.",
      user: "I can't believe I missed the flight"
    },
    {
      local: "I'm sorry! at the moment there is nothing to do",
      user: "And now? how do i get home?"
    },
    {
      local: "We have another flight to Brazil that leaves in six hours. Would you like to change your ticket? we have few seats left.",
      user: "Damn, do I have to wait six hours?"
    },
    {
      local: "It's the only plane we have to Brazil today 😕",
      user: "Everything's fine. Could you change my ticket please?"
    },
    {
      local: "Of course!. But unfortunately there is a fifty dollar fee, ok?!",
      user: "Okay, I have no other option..."
    },
    {
      local: "Ready! here's your ticket. Thank you so much for flying with us 😄",
      user: "Thank you so much for your service and patience."
    },
  ],
  [
    {
      local: "Mom! Dad!",
      user: "Hi baby"
    },
    {
      local: "Something happened to me at school today",
      user: "What happened, son?"
    },
    {
      local: "Clara fought with me",
      user: "But you and Clara are best friends! What happened?"
    },
    {
      local: "It's just that today at break I was playing with joão and I think she was sad about it",
      user: "But why didn't you invite her to play with you?"
    },
    {
      local: "I don't know 😭 I thought she wouldn't want to play",
      user: "It's okay, son"
    },
    {
      local: "What do I do now?",
      user: "Let's buy chocolates! Tomorrow you give it to her and apologize for not inviting her to play too, ok?"
    },
    {
      local: "I hope she's sorry",
      user: "Dear, of course she will accept. Don't worry"
    },
  ],
  // [
  //   {
  //     local: "",
  //     user: ""
  //   },
  // ],
]

export const historyTitles = [
  '',
  'The park girl',
  'The new phone',
  'Please just a coffee',
  'I missed my flight',
  'Friendship problems',
]
