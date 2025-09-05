import facebook_icon from './facebook_icon.svg'
import googleplus_icon from './googleplus_icon.svg'
import twitter_icon from './twitter_icon.svg'
import logo from './logo.svg'
import arrow from './arrow.svg'
import logo_light from './logo_light.svg'
import blog_icon from './blog_icon.png'
import add_icon from './add_icon.svg'
import list_icon from './list_icon.svg'
import email_icon from './email_icon.png'
import upload_area from './upload_area.svg'
import user_icon from './user_icon.svg'
import bin_icon from './bin_icon.svg'
import comment_icon from './comment_icon.svg'
import tick_icon from './tick_icon.svg'
import star_icon from './star_icon.svg'
import cross_icon from './cross_icon.svg'
import home_icon from './home_icon.svg'
import gradientBackground from './gradientBackground.png'
import dashboard_icon_1 from './dashboard_icon_1.svg'
import dashboard_icon_2 from './dashboard_icon_2.svg'
import dashboard_icon_3 from './dashboard_icon_3.svg'
import dashboard_icon_4 from './dashboard_icon_4.svg'

export const assets = {
    facebook_icon,
    googleplus_icon,
    twitter_icon,
    logo,
    arrow,
    logo_light,
    blog_icon,
    add_icon,
    email_icon,
    upload_area,
    user_icon,
    bin_icon,
    comment_icon,
    tick_icon,
    star_icon,
    home_icon,
    gradientBackground,
    list_icon,
    cross_icon,
    dashboard_icon_1,
    dashboard_icon_2,
    dashboard_icon_3,
    dashboard_icon_4,
}
export const blogCategories = ['All', 'Appetizer', 'Salad', 'Bakery',]

export const blog_data = [
    {
        "_id": "6805ee7dd8f584af5da78d37",
        "title": "Buffalo Cauliflower Wings",
        "description": "<h1>Buffalo Cauliflower Wings</h1><p>These spicy and crispy buffalo cauliflower wings are a perfect appetizer or snack for any occasion. They are easy to make and packed with flavor, making them a great alternative to traditional chicken wings.</p><h2>Ingredients</h2><ul><li>1 head of cauliflower, cut into florets</li><li>1 cup all-purpose flour</li><li>1 cup water</li><li>1 teaspoon garlic powder</li><li>1 teaspoon onion powder</li><li>1 teaspoon paprika</li><li>Salt and pepper to taste</li><li>1 cup buffalo sauce</li><li>2 tablespoons melted butter (optional)</li><li>Celery sticks and blue cheese dressing for serving</li></ul><h2>Instructions</h2><ol><li>Preheat your oven to 450°F (230°C).</li><li>In a large bowl, whisk together the flour, water, garlic powder, onion powder, paprika, salt, and pepper until smooth.</li><li>Dip each cauliflower floret into the batter, ensuring it is well coated.</li><li>Place the coated florets on a baking sheet lined with parchment paper.</li><li>Bake in the preheated oven for 20-25 minutes or until golden brown and crispy.</li><li>In a separate bowl, mix the buffalo sauce with melted butter (if using).</li><li>Remove the cauliflower from the oven and toss it in the buffalo sauce mixture until well coated.</li><li>Return to the oven and bake for an additional 10 minutes.</li><li>Serve hot with celery sticks and blue cheese dressing.</li></ol><h2>Notes</h2><p>Feel free to adjust the spice level by using more or less buffalo sauce. You can also add a pinch of cayenne pepper to the batter for extra heat.</p><h2>Tips</h2><ul><li>For a gluten-free version, substitute all-purpose flour with a gluten-free flour blend.</li><li>To make it vegan, ensure the buffalo sauce is vegan-friendly and skip the butter.</li><li>These cauliflower wings can be made ahead of time and reheated in the oven for a quick snack or appetizer.</li><li>Experiment with different sauces, such as BBQ or teriyaki, for a unique twist on the recipe.</li></ul>",
        "category": "Appetizer",
        "image": blog_pic_1,
        "createdAt": "2025-04-21T07:06:37.508Z",
        "updatedAt": "2025-04-24T08:26:29.750Z",
        "__v": 0,
        "isPublished": true,
        "subTitle": "Buffalo Cauliflower Wings"
    },
    {
        "_id": "6805ef08d8f584af5da78d39",
        "title": "Brownies",
        "description": "<h1>Brownies</h1><p>These brownies are rich, fudgy, and incredibly easy to make. Perfect for satisfying your chocolate cravings!</p><h2>Ingredients</h2><ul><li>1/2 cup unsalted butter</li><li>1 cup granulated sugar</li><li>2 large eggs</li><li>1 teaspoon vanilla extract</li><li>1/3 cup unsweetened cocoa powder</li><li>1/2 cup all-purpose flour</li><li>1/4 teaspoon salt</li><li>1/4 teaspoon baking powder</li><li>1/2 cup chocolate chips (optional)</li></ul><h2>Instructions</h2><ol><li>Preheat your oven to 350°F (175°C).</li><li>In a medium saucepan, melt the butter over low heat.</li><li>Remove from heat and stir in the sugar, eggs, and vanilla extract until well combined.</li><li>Sift together the cocoa powder, flour, salt, and baking powder in a separate bowl.</li><li>Gradually add the dry ingredients to the wet mixture, stirring until just combined.</li><li>If using, fold in the chocolate chips.</li><li>Pour the batter into a greased 8x8 inch baking dish.</li><li>Bake for 20-25 minutes or until a toothpick inserted into the center comes out with a few moist crumbs.</li><li>Let cool before cutting into squares and serving.</li></ol><h2>Notes</h2><p>For a fudgier texture, reduce the baking time slightly. You can also add nuts or swirl in peanut butter for extra flavor.</p><h3>Enjoy your delicious brownies!</h3>",
        "category": "Bakery",
        "image": blog_pic_2,
        "createdAt": "2025-04-21T07:08:56.214Z",
        "updatedAt": "2025-04-24T08:30:47.920Z",
        "__v": 0,
        "isPublished": true,
        "subTitle": "Brownies"
    }
]

export const comments_data = [
        {
            "_id": "680779aebef75c08f8b4898f",
            "blog": blog_data[2],
            "name": "Jack London",
            "content": "Hi this blog is must to read",
            "isApproved": true,
            "createdAt": "2025-04-22T11:12:46.547Z",
            "updatedAt": "2025-04-22T11:13:10.015Z",
            "__v": 0
        },
        {
            "_id": "680770aeb2897e5c28bf9b26",
            "blog": blog_data[3],
            "name": "Sam Smith",
            "content": "This is the best blog, everybody should read it",
            "isApproved": false,
            "createdAt": "2025-04-22T10:34:22.020Z",
            "updatedAt": "2025-04-22T10:34:22.020Z",
            "__v": 0
        },
        {
            "_id": "68076468e32055c94a696cf5",
            "blog": blog_data[4],
            "name": "Peter Lawrence",
            "content": "Honestly, I did not expect this to work, but it totally did. Saved my project!",
            "isApproved": true,
            "createdAt": "2025-04-22T09:42:00.444Z",
            "updatedAt": "2025-04-22T10:24:55.626Z",
            "__v": 0
        }
    ]

export const dashboard_data = {
    "blogs": 10,
    "comments": 5,
    "drafts": 0,
    "recentBlogs": blog_data.slice(0, 5),
}

export const footer_data = [
      {
          title: "Large Links",
          links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"]
      },
      {
          title: "Need Help?",
          links: ["Delivery Information", "Return & Refund Policy", "Payment Methods", "Track your Order", "Contact Us"]
      },
      {
          title: "Follow Us",
          links: ["Instagram", "Twitter", "Facebook", "YouTube"]
      }
  ];