<template>
    <div class="market container-second">
        <h3 class="h3-margin">Рынок комплектующих</h3>
        <div class="cards">
            <section class="goods" v-for='product in products' :key='product'>
                <div :class="product.class"></div>
                <p class="info-text">{{product.title}}</p>
                <p class="text">Стоимость: {{product.price}} монет</p>
                <button class="btn-primary" @click="addToStorage(product)">Установить</button>    
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .market {
        .cards {
            display: flex;
            justify-content: space-between;
            .goods {
                display: flex;
                flex-direction: column;
                align-items: center;
                &__info-text {
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 24px;
                    color: #FFFFFF;
                }
                &__second-text {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: #A3B8CC;
                }
                .btn-primary {
                    background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);
                    border-radius: 60px;
                    border: none;
                    padding: 12px 54px;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    text-align: center;
                    color: #FFFFFF;
                    cursor: pointer;
                }

                .btn-primary:hover {
                    background: linear-gradient(180deg, #FF5722 0%, #FF5722 100%);
                }
                .btn-primary:active {
                    background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);
                }
                .btn-primary:disabled {
                    background: linear-gradient(180deg, #4C5865 0%, #4C5865 100%);
                    border-radius: 60px;
                    border: none;
                    padding: 12px 54px;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    text-align: center;
                    color: #FFFFFF;
                    cursor: pointer;
                }
                .hand {
                    width: 236px;
                    height: 128px;
                    background-image: url('../assets/img/hand.png');
                    background-position: center;
                    background-repeat: no-repeat;
                    filter: drop-shadow(0px 8px 90px #FF7F22);
                }
                .chip {
                    width: 236px;
                    height: 128px;
                    background-image: url('../assets/img/chip.png');
                    background-position: center;
                    background-repeat: no-repeat;
                    filter: drop-shadow(0px 8px 90px #FF7F22);
                }
                .soul {
                    width: 236px;
                    height: 128px;
                    background-image: url('../assets/img/soul.png');
                    background-position: center;
                    background-repeat: no-repeat;
                    filter: drop-shadow(0px 8px 90px #FF7F22);
                }
            }
        }
    }
</style>

<script>
import store from "../store"
export default {
    data() {
        return {
            products: [
                {
                    id: 1001,
                    title: 'Биорука',
                    price: 7,
                    available: 4,
                    class: 'goods__image hand',
                    count: 1
                },
                {
                    id: 1002,
                    title: 'Микрочип',
                    price: 5,
                    available: 4,
                    class: 'goods__image chip',
                    count: 1
                },
                {
                    id: 1003,
                    title: 'Душа',
                    price: 25,
                    available: 1,
                    class: 'goods__image soul',
                    count: 1
                },
            ],
        }
    },
    store,
    computed: {},
    methods: {
        addToStorage(aProduct) {
            if(this.$store.state.storage.some((item) => item.id === aProduct.id)) {
                this.$store.state.storage.map((item) => {
                    if(item.id === aProduct.id) {
                        item.count++;
                    }
                    return item;
                });
            } else {
                this.$store.state.storage.push(aProduct);
            }
            console.log(this.$store.state.storage);
        }
    }
}

</script>