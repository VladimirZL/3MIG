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
//category页面数据值
const getCategorypageData = require('./modules/host/category/categoryPageData.js');
//cart页面数据值
const getCartpageData = require('./modules/host/cart/cartPageData.js');
const getCartshoppiongData = require('./modules/host/cart/cartShoppingData.js');


/***  product页面  ***/

const getProductData = require('./modules/product/product.js');




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
	.get('/categoryPage/data', async (ctx) => {
		let result = await getCategorypageData();
		back(ctx, result);
	})
	.get('/cartPage/data',  async (ctx) => {
		let result = await getCartpageData();
		back(ctx, result);
	})
	.get('/cartPage/shopping',  async (ctx) => {
		let result = await getCartshoppiongData();
		back(ctx, result);
	});

let product = new Router();
product
	.get('/data', async (ctx) => {
		let _productId = ctx.query.productId;
		let result = await getProductData(_productId);
		back(ctx, result);
	})


router.use('/host', host.routes(), host.allowedMethods());
router.use('/product', product.routes(), product.allowedMethods());

	
app.use(router.routes());

app.listen(3000, () => {
	console.log('okooo');
});