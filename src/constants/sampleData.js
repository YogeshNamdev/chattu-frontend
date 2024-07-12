export const sampleChats = [
  {
    avatar: ['https://www.w3schools.com/howto/img_avatar.png'],
    name: 'Yogesh Namdev',
    _id: '1',
    groupChat: false,
    members: ['1', '2'],
  },
  {
    avatar: ['https://www.w3schools.com/howto/img_avatar.png'],
    name: 'Sharad Mehra',
    _id: '2',
    groupChat: false,
    members: ['1', '2'],
  },
  {
    avatar: [
      'https://www.w3schools.com/howto/img_avatar.png',
      'https://www.w3schools.com/howto/img_avatar.png',
      'https://www.w3schools.com/howto/img_avatar.png',
      'https://www.w3schools.com/howto/img_avatar.png',
    ],
    name: 'Bakchod Groud',
    _id: '3',
    groupChat: true,
    members: ['1', '2', '3'],
  },
]

export const sampleUsers = [
  {
    avatar: ['https://www.w3schools.com/howto/img_avatar.png'],
    name: 'Yogesh Namdev',
    _id: '1',
    groupChat: false,
    members: ['1', '2'],
  },
  {
    avatar: ['https://www.w3schools.com/howto/img_avatar.png'],
    name: 'Sharad Mehra',
    _id: '2',
  },
  {
    avatar: [
      'https://www.w3schools.com/howto/img_avatar.png',
      'https://www.w3schools.com/howto/img_avatar.png',
      'https://www.w3schools.com/howto/img_avatar.png',
      'https://www.w3schools.com/howto/img_avatar.png',
    ],
    name: 'Bakchod Groud',
    _id: '3',
  },
]

export const sampleNotifications = [
  {
    sender: {
      avatar: ['https://www.w3schools.com/howto/img_avatar.png'],
      name: 'Yogesh Namdev',
    },
    _id: '1',
  },
  {
    sender: {
      avatar: ['https://www.w3schools.com/howto/img_avatar.png'],
      name: 'Sharad Mehra',
    },
    _id: '2',
  },
]

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: 'test',
        url: 'https://www.w3schools.com/howto/img_avatar.png',
      },
    ],
    content: 'l*uda ka message hai',
    _id: 'vbbbfkwe',
    sender: {
      _id: 'user._id',
      name: 'Chaman',
    },
    chat: 'chatId',
    createAt: '2024-02-12T10:41:30.630Z',
  },
  {
    attachments: [
      {
        public_id: 'test',
        url: 'https://www.w3schools.com/howto/img_avatar.png',
      },
    ],
    //content : "l*uda 2vka message hai",
    _id: 'vbbbfkwcfbgfdhe',
    sender: {
      _id: 'kfbsadbfsk',
      name: 'Chamanv2',
    },
    chat: 'chatId',
    createAt: '2024-02-12T10:41:30.630Z',
  },
]

export const dashboardData = {
  users: [
    {
      name: "Yogesh Namdev",
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      _id: "1",
      username: "Yogi_1998",
      friends: 20,
      groups: 5
    },
    {
      name: "Sharad Mehra",
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      _id: "2",
      username: "sharad_2000",
      friends: 25,
      groups: 21
    }
  ],

  chats :[{
    name:"LabadBass Group",
    avatar :['https://www.w3schools.com/howto/img_avatar.png'],
    _id:"1",
    groupChat : false,
    members :[{_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"},{_id:"2", avatar:"https://www.w3schools.com/howto/img_avatar.png"}],
    totalMembers : 2,
    totalMessage: 20,
    creator :{
      name: "yogesh namdev",
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',

    },
 },{
  name:"La*do ka Group",
  avatar :['https://www.w3schools.com/howto/img_avatar.png'],
  _id:"2",
  groupChat : true,
  members :[{_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"},{_id:"2", avatar:"https://www.w3schools.com/howto/img_avatar.png"}],
  
  totalMembers : 2,
  totalMessage: 20,
  creator :{
    name: "yogesh namdev",
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',

  },
},


],

messages:[{
  attachments :[],
  content: "L*uda ka message hai",
  _id: "uibfrebrvfbvevfev",
  sender:{
    avatar : "https://www.w3schools.com/howto/img_avatar.png",

    name: "Chaman",
  },
  chat: "ChatId",
  groupChat : false,
  createdAt: "2024-02-12T10:41:30.630Z",
},
{
  attachments : [
    {
      public_id : "bfhweb 2",
      url :"https://www.w3schools.com/howto/img_avatar.png",
    }
  ],
  content : "",
  _id: "bhfvbhdvjdsvbbvds",
  sender : {
    avatar : "https://www.w3schools.com/howto/img_avatar.png",
    name: "Chaman 3",
  },
  chat : "chatId",
  groupChat : true,

  createdAt: "2024-02-12T10:41:33.631Z",
  
}


]

}

