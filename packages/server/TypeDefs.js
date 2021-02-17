export const typeDefs = `
  scalar Date
  type Post {
    id: ID
    title: String
    slug: String
    content: String
    city: String
    belongsTo: String
    brand: String
    category: String
    amenities: String
    status: String
    author: Author
    authorId: ID
    image: Image
    price: Float
    originalPrice: Float
    mileage: Int
    miles: Int
    location: Location
    formattedLocation: Location
    distance: Float
    categories: [Category]
    gallery: [Image]
    isNegotiable: Boolean
    favouritedBy: [String]
    condition: String
    related(limit: Int): [Post]
    contactNumber: String
    createdAt: Date
    updatedAt: Date
  }
  type Author {
    id: ID
    email: String
    secondEmail: String
    username: String
    mobile: [Mobile]
    image: Image
    address: String
    title: String
    homeLocation: Location
    workLocation: Location
    website: String
    name: String
    posts(limit: Int, page: Int): PostWithCount
    favourite(limit: Int, page: Int): PostWithCount
    draft(limit: Int, page: Int) : PostWithCount
    sold(limit: Int, page: Int) : PostWithCount
    createdAt: Date
    updatedAt: Date
  }
  type Category {
    id: ID!
    slug: String
    name: String
    value: ID
    label: String
    image: Image
    posts(limit: Int, page: Int ): PostWithCount
    createdAt: Date
    updatedAt: Date
    author: Author
  }
  type PostWithCount {
    data: [Post],
    total: Int
  }
  type Mobile {
    number: String
  }
  type Location {
    lat: Float
    lng: Float
    formattedAddress: String
  }
  type Image {
    url: String
    largeUrl: String
  }
  type PostWithTotal {
    data: [Post]
    total: Int
  }

  type CategoryWithTotal {
    data: [Category]
    total: Int
  }

  type AuthorWithTotal {
    data: [Author]
    total: Int
  }

  input inputMobile {
    number: String
  }

  input authorInput {
    id: ID
    email: String
    username: String
    image: imageInput
    website: String
    mobile: [inputMobile]
    name: String
    createdAt: String
    updatedAt: String
    title: String
    homeLocation: locationInput
    workLocation: locationInput
  }

  input locationInput {
    lat: Float
    lng: Float
    formattedAddress: String
  }
  input imageInput {
    url: String
    largeUrl: String
  }

  input categoryInput {
    id: ID!
    label: String
    slug: String
    value: ID!
    name: String
  }
  input categoryPostInput {
    title: String
    image: imageInput
    price: Float
    slug: String
  }
  input ResetPassInput {
    currentPass: String!
    newPass: String!
    confirmPass: String!
  }
  input LoginInput {
    email: String!
    password: String!
    remember: Boolean
    provider: String
  }

  input postUpdateStatusInput {
    id: ID
    status: String
  }

  input postInput {
    id: ID
    authorId: ID!
    title: String!
    slug: String!
    content: String
    address: String
    zip: String
    beds: String
    baths: String
    roomies: String
    lotSize: String
    sqft: String
    type: String
    mileage: Int
    miles: Int
    status: String
    image: imageInput
    price: Float
    originalPrice: Float
    brand: String
    belongsTo: String
    category: String
    city: String
    amenities: String
    location: locationInput
    categories: [categoryInput]
    gallery: [imageInput!]
    isNegotiable: Boolean
    condition: String
    createdAt: String
    updatedAt: String
    contactNumber: String
  }
  input InputMobileNumber {
    number: String!
  }
  type Token {
    token: String
  }
  type User {
    userId: ID!,
    email: String,
    error: String!,
  }
  input RegisterInput {
    email: String
    token: String!
    mobile: [inputMobile]
  }
  type Notice {
    message: String!
  }

  input SotingInput {
    field: String
    type: String
  }

  input adFavInput {
    postId: String
    id: ID
  }

  input searchParams {
    categories: [String]
    isNegotiable: Boolean
    condition: String
    address: String
    location: locationInput
    price: [Int]
    radius: Int
    sorting: SotingInput
    text: String
    page: Int
    limit: Int
    initialLoading: Boolean
  }

  type Query {
    posts(limit: Int, page: Int, status: String): PostWithTotal
    nearest(limit: Int, page: Int, location: locationInput): PostWithTotal
    searchPosts(searchParams: searchParams): PostWithTotal
    post(id: ID, slug: String, lat: Float, lng: Float): Post
    authors(limit: Int): AuthorWithTotal
    author(username: String, id: ID): Author
    category(id: ID, slug: String): Category
    categories(limit: Int, string: String, page: Int): CategoryWithTotal
  }

  type Mutation {
    
    updatePostStatus(input: postUpdateStatusInput ): Post
    addPost(input: postInput ): Post
    addCategory( input: categoryInput ): Category
    addAuthor( input: authorInput ): Author
    login(input: RegisterInput) : User
    register(input: RegisterInput) : User
    logout(input:RegisterInput): User
    handleFav(input: adFavInput) : PostWithTotal
  }
`;
