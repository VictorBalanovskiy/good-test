<template>
    <div class="storage container-second" id="storage">
         <h3 class="h3-margin">Склад</h3>
         <div class="storage__items">
             <section class="item">
                <p class="info-text">Биорука</p>
                <p class="text">Стоимость: 5 монет</p>
                <p class="info-text">2 шт</p>
                <a href="#storage" class="btn-secondary">Продать</a>
             </section>
             <section class="item">
                <p class="info-text">Микрочип</p>
                <p class="text">Стоимость: 3 монет</p>
                <p class="info-text">2 шт</p>
                <a href="#storage" class="btn-secondary">Продать</a>
             </section>
             <section class="item">
                <p class="info-text">Душа</p>
                <p class="text">Стоимость: 15 монет</p>
                <p class="info-text">0 шт</p>
                <a href="#storage" class="btn-secondary">Продать</a>
             </section>
         </div>
    </div>
</template>

<style lang="scss" scoped>
.storage {
    &__items {
        display: flex;
        justify-content: space-between;
        .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            .btn-secondary {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                color: #7CDAF9;
                padding: 12px 62px;
                filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
                border: 2px solid #22B3E3;
                border-radius: 60px;
                text-decoration: none;
                box-sizing: border-box;
                transition: 0.3s;
            }
            .btn-secondary:hover {
                filter: drop-shadow(0px 10px 40px #1E5466);
                color: #212529;
                background: #7CDAF9;
                border: 2px solid #000000;
                box-sizing: border-box;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                transition: 0.3s;
            }
            .btn-secondary:active {
                border: 2px solid #22B3E3;
                box-sizing: border-box;
                background: #222B33;
                color: #7CDAF9;
                filter: drop-shadow(0px 0px 0px #222B33);
                transition: 0.3s;
            }
        }
    }
}
</style>

<script>
import store from '../store/'
export default {
    data() {
        return {
            store,
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
    methods: {
        getCount() {
            if(this.$store.state.storage.length < 1) {
                return count = 0;
            } else {
                this.$store.state.store.aProduct.count;
            }
        },
        getStorage() {
            return this.$store.getters.getStorage;
        }
    }
}
</script>