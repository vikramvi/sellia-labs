[
  {
    belongsTo: {
      list: [
        {
          id: 1,
          text: 'For myself',
        },
        {
          id: 2,
          text: 'For my friend',
        },
        {
          id: 3,
          text: 'For my family',
        },
      ],
    },
    feature: {
      add_photo: true,
      belongs_to: true,
    },
    id: 'vvoXguexMRqLcWixTOGz',
    rank: 1,
    sections: [
      {
        key: 'title',
        title: 'Title',
        type: 'textField',
      },
      {
        key: 'formattedLocation',
        title: 'City',
        type: 'location',
      },
      {
        list: [
          {
            key: 'price',
            title: 'Asking Price',
            type: 'currency',
          },
          {
            key: 'originalPrice',
            title: 'Original Price',
            type: 'currency',
          },
        ],
        title: 'Price',
        type: 'rowContainer',
      },
      {
        key: 'category',
        list: [
          {
            id: 7,
            text: 'Furniture',
          },
          {
            id: 1,
            text: 'Appliances',
          },
          {
            id: 2,
            text: 'Automotive',
          },
          {
            id: 3,
            text: 'Baby & Kids',
          },
          {
            id: 4,
            text: 'Bicycles',
          },
          {
            id: 5,
            text: 'Garden',
          },
          {
            id: 6,
            text: 'Electronics',
          },
        ],
        title: 'Choose category',
        type: 'radioSelectionList',
      },
      {
        key: 'condition',
        list: [
          {
            id: 0,
            text: 'New',
          },
          {
            id: 1,
            text: 'Used',
          },
          {
            id: 2,
            text: 'Refurbished',
          },
        ],
        title: 'Condition',
        type: 'selectionList',
      },
      {
        key: 'content',
        title: 'Description',
        type: 'textDescription',
      },
    ],
    slug: 'to-sell',
    title: 'to sell',
  },
  {
    belongsTo: {
      list: [
        {
          id: 1,
          text: 'For myself',
        },
        {
          id: 2,
          text: 'For my friend',
        },
        {
          id: 3,
          text: 'For my family',
        },
      ],
    },
    feature: {
      add_photo: true,
      belongs_to: true,
    },
    id: 'aNZSJZQDoSYRbrvrYlBF',
    rank: 2,
    sections: [
      {
        key: 'title',
        title: 'Title',
        type: 'textField',
      },
      {
        list: [
          {
            key: 'address',
            title: 'Address',
            type: 'textBox',
          },
          {
            key: 'zip',
            title: 'Zip Code',
            type: 'textBox',
          },
        ],
        title: '',
        type: 'rowContainer',
      },
      {
        list: [
          {
            key: 'beds',
            title: 'Beds',
            type: 'textBox',
          },
          {
            key: 'baths',
            title: 'Baths',
            type: 'textBox',
          },
          {
            key: 'roomies',
            title: 'No. of Roommates',
            type: 'textBox',
          },
        ],
        title: '',
        type: 'rowContainer',
      },
      {
        key: 'price',
        title: 'Budget',
        type: 'currency',
      },
      {
        list: [
          {
            isMulti: false,
            key: 'type',
            list: [
              {
                id: 0,
                text: 'Entire Flat',
              },
              {
                id: 1,
                text: 'Room',
              },
              {
                id: 2,
                text: 'Shared Apartment',
              },
              {
                id: 3,
                text: 'Dormitory',
              },
            ],
            title: 'Type of House',
            type: 'selectionList',
          },
          {
            isMulti: true,
            key: 'amenities',
            list: [
              {
                id: 0,
                text: 'Laundry',
              },
              {
                id: 1,
                text: 'Internet',
              },
              {
                id: 2,
                text: 'Car Parking',
              },
              {
                id: 3,
                text: 'HVAC',
              },
            ],
            title: 'Amenities',
            type: 'selectionList',
          },
        ],
        type: 'rowContainer',
      },
      {
        key: 'content',
        title: 'Description',
        type: 'textDescription',
      },
    ],
    slug: 'roommate',
    title: 'for a roommate',
  },
  {
    belongsTo: {
      list: [
        {
          id: 1,
          text: 'Mine',
        },
        {
          id: 2,
          text: "My friend's",
        },
        {
          id: 3,
          text: "My family's",
        },
      ],
    },
    feature: {
      add_photo: false,
      belongs_to: true,
    },
    id: 'iVv8DMirsfXLRP7w0gBM',
    rank: 3,
    sections: [
      {
        key: 'title',
        title: 'Title',
        type: 'textField',
      },
      {
        list: [
          {
            key: 'beds',
            title: 'Beds',
            type: 'textBox',
          },
          {
            key: 'baths',
            title: 'Baths',
            type: 'textBox',
          },
          {
            key: 'lotSize',
            title: 'Lot Size',
            type: 'textBox',
          },
          {
            key: 'sqft',
            title: 'Sq. Ft.',
            type: 'textBox',
          },
        ],
        title: '',
        type: 'rowContainer',
      },
      {
        list: [
          {
            key: 'price',
            title: 'Price',
            type: 'currency',
          },
        ],
        title: 'Price',
        type: 'rowContainer',
      },
      {
        key: 'zip',
        title: 'Zip Code',
        type: 'textBox',
      },
      {
        key: 'content',
        title: 'Description',
        type: 'textDescription',
      },
    ],
    slug: 'rent-house',
    title: 'to rent a house',
  },
  {
    belongsTo: {
      list: [
        {
          id: '1',
          text: 'For myself',
        },
        {
          id: 2,
          text: 'For my friend',
        },
        {
          id: 3,
          text: 'For my family',
        },
      ],
    },
    feature: {
      add_photo: true,
      belongs_to: true,
    },
    id: 'U3yHoTSVIcOQqotozupp',
    rank: 4,
    sections: [
      {
        key: 'title',
        title: 'Title',
        type: 'textField',
      },
      {
        list: [
          {
            key: 'beds',
            title: 'Beds',
            type: 'textBox',
          },
          {
            key: 'baths',
            title: 'Baths',
            type: 'textBox',
          },
          {
            key: 'lotSize',
            title: 'Lot Size',
            type: 'textBox',
          },
          {
            key: 'sqft',
            title: 'Sq. Ft.',
            type: 'textBox',
          },
        ],
        title: '',
        type: 'rowContainer',
      },
      {
        list: [
          {
            key: 'price',
            title: 'Price',
            type: 'currency',
          },
        ],
        title: 'Price',
        type: 'rowContainer',
      },
      {
        key: 'zip',
        title: 'Zip Code',
        type: 'textBox',
      },
      {
        key: 'content',
        title: 'Description',
        type: 'textDescription',
      },
    ],
    slug: 'sell-house',
    title: 'to sell a house',
  },
  {
    belongsTo: {
      key: 'belongsTo',
      list: [
        {
          id: 1,
          text: 'For myself',
        },
        {
          id: 1,
          text: 'For my friend',
        },
        {
          id: 3,
          text: 'For my family',
        },
      ],
    },
    feature: {
      add_photo: true,
      belongs_to: true,
    },
    id: 'fKJqetAGRZElL8ct0gJT',
    rank: 5,
    sections: [
      {
        key: 'brand',
        list: [
          {
            id: '0',
            text: 'Toyota',
          },
          {
            id: '1',
            text: 'Tesla',
          },
          {
            id: 2,
            text: 'Honda',
          },
          {
            id: 3,
            text: 'Hyundai',
          },
          {
            id: 4,
            text: 'Kia',
          },
          {
            id: 5,
            text: 'Jeep',
          },
          {
            id: 6,
            text: 'Ford',
          },
          {
            id: 7,
            text: 'Porche',
          },
          {
            id: 8,
            text: 'Chevrolet',
          },
          {
            id: 9,
            text: 'Genesis',
          },
          {
            id: 10,
            text: 'Chrysler',
          },
          {
            id: 11,
            text: 'Dodge',
          },
          {
            id: 0,
            text: 'Other',
          },
        ],
        title: 'Choose Brand',
        type: 'radioSelectionList',
      },
      {
        key: 'title',
        title: 'Title / Make Model Year',
        type: 'textField',
      },
      {
        list: [
          {
            key: 'price',
            title: 'Asking Price',
            type: 'currency',
          },
          {
            key: 'originalPrice',
            title: 'Original Price',
            type: 'currency',
          },
        ],
        title: 'Price',
        type: 'rowContainer',
      },
      {
        id: '',
        key: 'content',
        title: 'Description',
        type: 'textDescription',
      },
      {
        list: [
          {
            id: '',
            key: 'mileage',
            title: 'Mileage',
            type: 'textBox',
          },
          {
            id: '',
            key: 'miles',
            title: 'Miles run',
            type: 'textBox',
          },
        ],
        type: 'rowContainer',
      },
    ],
    slug: 'car',
    title: 'to sell car',
  },
  {
    belongsTo: {
      list: [
        {
          id: 1,
          text: 'For myself',
        },
        {
          id: 2,
          text: 'For my family',
        },
        {
          id: 3,
          text: 'For my friend',
        },
      ],
    },
    feature: {
      add_photo: false,
      belongs_to: true,
    },
    id: 'o9C99pRzTC3ImeRV57yt',
    rank: 6,
    sections: [
      {
        key: 'title',
        title: 'Title',
        type: 'textField',
      },
      {
        key: 'content',
        title: 'Description',
        type: 'textDescription',
      },
    ],
    slug: 'recommendation',
    title: 'for recommendations',
  },
];
