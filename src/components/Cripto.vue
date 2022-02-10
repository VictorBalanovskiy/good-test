<template>
    <div class="cripto container-second">
        <div class="cripto__wallet">
            <h3 class="h3-margin">Кошелек криптовалют</h3>
            <div class="coins"><img src="../assets/img/Coin.png" alt="coin" v-for="n in count" v-bind:key = n></div>
            <p class="info-text-grey-500"><strong>{{ count }}</strong> biorobo {{ message }}</p>
        </div>
        <div class="cripto__gypsy">
            <button v-if="unChecked === off" @click="increment()">Нацыганить</button>
            <button v-else @click="incrementFiveCoin()">Нацыганить</button>
            <input type="checkbox" name="gypsy" id="gypsy_chbx" v-model="unChecked" true-value="on" false-value="off">
            <label for="gypsy_chbx">Цыганить по 5 монет</label>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cripto {
        label {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;
            margin-left: 8px;
        }
        button {
            margin-right: 20px;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #FF7F22;
            background-color: inherit;
            border: none;
            border-bottom: 1px solid #FF7F22;
            padding: 0;
            transition: 0.5s;
            cursor: pointer;
        }
        button:hover {
            color: #FF5722;
            border-bottom: 1px solid #FF5722;
            transition: 0.5s;
        }
        a {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #FF7F22;
        }

        &__gypsy {
            display: flex;
            align-items: center;
        }
        .coins {
            display: flex;
            height: 20px;
            img {
                margin-left: -8px;
            }
        }
    }
</style>

<script>
import store from "../store/"

export default {
    data() {
        return {
            on: true,
            off: false,
            unChecked: false,
        }
    },
    store,
    methods: {
        increment() {
            return this.$store.getters.increment;
        },
        incrementFiveCoin() {
            return this.$store.getters.incrementFiveCoin;
        },
    },
    computed: {
        count() {
            return this.$store.state.count;
        },
        maxCoin() {
            return this.$store.getters.maxCoin;
        },
        message() {
            this.$store.commit('lastNumber');
            return this.$store.state.message;
        }
    },
}
</script>