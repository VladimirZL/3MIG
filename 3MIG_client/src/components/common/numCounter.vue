<!-- 计数器组件 -->

<template>
    <div class = 'num-counter'>
		<div 
			:class = "['num-counter-sign', {'num-counter-sign-canChange': canSub === true}]" 
			@click = "changeNumber('sub')">
			-
		</div>
        <div>{{ buyNumber }}</div>
        <div 
        	:class = "['num-counter-sign', {'num-counter-sign-canChange': canAdd === true}]" 
        	@click = "changeNumber('add')">
        	+
        </div>
    </div>
</template>

<script>

export default {
  	name: 'num-counter',
  	data () {
  		return {
  			canAdd: true,
            canSub: false,
            buyNumber: this.buyNum,
  		}
  	},
    props: ['buyNum', 'buyLimit', 'buyIndex'],
    methods: {
    	//改变数量
        changeNumber (_op) {
            switch (_op) {
                case 'add': {
                    if (this.buyNumber < this.buyLimit) {
                        this.buyNumber++;
                        //两次调用的地方不同
                        if (this.buyIndex !== undefined) {
                            this.$emit('changeNum', this.buyNumber, this.buyIndex, _op);
                        } else {
                            this.$emit('changeNum', this.buyNumber);
                        }
                    }
                }
                break;
                case 'sub': {
                    if (this.buyNumber > 1) {
                        this.buyNumber--;
                        //两次调用的地方不同
                        if (this.buyIndex !== undefined) {
                            this.$emit('changeNum', this.buyNumber, this.buyIndex, _op);
                        } else {
                            this.$emit('changeNum', this.buyNumber);
                        }
                    }
                }
                break;
            }
            this.canAdd = this.buyNumber < this.buyLimit ? true : false;
            this.canSub = this.buyNumber > 1 ? true : false;
        }
    },
    watch: {
        'buyNum' () {
            this.buyNumber = this.buyNum;
            this.canAdd = this.buyNum >= this.buyLimit ? false : true;
            this.canSub = this.buyNumber > 1 ? true : false;
        }
    },
    beforeMount () {
    	this.canAdd = this.buyNum >= this.buyLimit ? false : true;
        this.canSub = this.buyNumber > 1 ? true : false;
    }
}
</script>

<style lang="scss" scoped>
	.num-counter {
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        border: 1px solid #EEEEEE;
        div {
            min-width: 0.6rem;
            text-align: center;
            vertical-align: middle;
        }
        .num-counter-sign {
            opacity: 0.4;
            width: 0.6rem;
            height: 0.6rem;
            // color: #CECECE;
            font-size: 0.5rem;
            background-color: #FAFAFA;
        }
        .num-counter-sign-canChange {
            opacity: 0.8;
        }
    }
</style>
