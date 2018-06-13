const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const app = new Koa();
const router = new Router();

/***  host页面  ***/

//home页面数据值
const getHomemenuContent = require('./modules/host/home/homeMenuContent.js');
const getHomepageData = require('./modules/host/home/homePageData.js');
//product页面
const getProductViewData = require('./modules/host/product/productView.js');
const getProductRecommData = require('./modules/host/product/productRecomm.js');
const getProductListData = require('./modules/host/product/productList.js');
//comment页面数据值
const getCommentListData = require('./modules/host/comment/commentList.js');
const getCommentViewData = require('./modules/host/comment/commentView.js');
//category页面数据值
const getCategorypageData = require('./modules/host/category/categoryPageData.js');
//cart页面数据值
const getCartpageData = require('./modules/host/cart/cartPageData.js');
const getCartshoppiongData = require('./modules/host/cart/cartShoppingData.js');
//search页面数据值
const getSearchpageData = require('./modules/host/search/searchPageData.js');
const getSearchlistData = require('./modules/host/search/searchListData.js');
const getSearchkeyData = require('./modules/host/search/searchKeyData.js');
//channel页面数据
const getChannelpageData = require('./modules/host/channel/channelPageData.js');


/***  Login页面  ***/ 

//获取手机验证码 
const getPhoneVcode = require('./modules/login/phoneVcode.js');
//执行登陆
const doLogin = require('./modules/login/login.js');


//返回值
let back = (ctx, result) => {
	if(result.success) {
		ctx.body = {
			success: true,
			data: JSON.parse(result.data)
		}
	} else {
		ctx.body = {
			success: false,
			err: result.err
		}
	}
};

//跨域
app.use(cors());

let host = new Router();
host
	//主页
	.get('/homePage/menu', async (ctx) => {
		let result = await getHomemenuContent();
		back(ctx, result);
	})
	.get('/homePage/data', async (ctx) => {
		let option_id = ctx.query.optionId;
		let option_type = ctx.query.optionType;
		let result = await getHomepageData(option_id, option_type);
		back(ctx, result);
	})
	//分类
	.get('/categoryPage/data', async (ctx) => {
		let result = await getCategorypageData();
		back(ctx, result);
	})
	//商品
	.get('/product/view/data', async (ctx) => {
		let _productId = ctx.query.productId;
		let result = await getProductViewData(_productId);
		back(ctx, result);
	})
	.get('/product/view/recommend', async (ctx) => {
		let _productId = ctx.query.productId;
		let result = await getProductRecommData(_productId);
		back(ctx, result);
	})
	.get('/product/list/data', async (ctx) => {
		let _categoryId = ctx.query.categoryId;
		let result = await getProductListData(_categoryId);
		back(ctx, result);
	})
	//评论
	.get('/comment/list/data', async (ctx) => {
		let _goodId = ctx.query.goodId;
		let _page_index = ctx.query.pageIndex;
		let _type = ctx.query.type;
		let _show_img = ctx.query.showImg;
		let result = await getCommentListData(_goodId, _page_index, _type, _show_img);
		back(ctx, result);
	})
	.get('/comment/view/data', async (ctx) => {
		let _commentId = ctx.query.commentId;
		let result = await getCommentViewData(_commentId);
		back(ctx, result);
	})
	//购物车
	.get('/cartPage/data',  async (ctx) => {
		let result = await getCartpageData();
		back(ctx, result);
	})
	.get('/cartPage/shopping',  async (ctx) => {
		let result = await getCartshoppiongData();
		back(ctx, result);
	})
	//搜索
	.get('/searchPage/data',  async (ctx) => {
		let result = await getSearchpageData();
		back(ctx, result);
	})
	.get('/searchPage/list',  async (ctx) => {
		let list_name = ctx.query.listName;
		let result = await getSearchlistData(list_name);
		back(ctx, result);
	})
	.get('/searchPage/key', async (ctx) => {
		let input_key = ctx.query.key;
		let result = await getSearchkeyData(input_key);
		back(ctx, result);
	})
	//特殊商品页面
	.get('/channelPage/data', async (ctx) => {
		let _productId = ctx.query.productId;
		let result = await getChannelpageData(_productId);
		back(ctx, result);
	})


let login = new Router();
login
	.get('/phonevcode', async (ctx) => {
		let _user = ctx.query.user;
		let _vcode = ctx.query.vercode;
		let result = await getPhoneVcode(_user, _vcode);
		back(ctx, result);
	})
	.get('/doLogin', async (ctx) => {
		let _user = ctx.query.user;
		let _phoneVcode = ctx.query.phoneVcode;
		let result = await doLogin(_user, _phoneVcode);
		back(ctx, result);
	})



router.use('/host', host.routes(), host.allowedMethods());
router.use('/login', login.routes(), login.allowedMethods());

	
app.use(router.routes());

app.listen(3000, () => {
	console.log('okooo');
});