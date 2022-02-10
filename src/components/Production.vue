<template>
    <div class="production container-second" id="production">
        <h3 class="h3-margin">Производство</h3>
        <div class="production__line">
            <div class="production__line-left">
                <div class="production__menu">
                    <div class="menu-checkbox">
                        <div class="biorobot">
                            <p class="medium-text">Тип биоробота:</p>
                            <div class="radio-type">
                                <input class="input-radio" type="radio" name="prof" id="frontend">
                                <label class="second-text radio-second" for="frontend">FrontEnd</label>
                                <input class="input-radio" type="radio" name="prof" id="design">
                                <label class="second-text" for="design">Design</label>
                            </div>
                        </div>
                        <div class="stabilizer">
                            <p class="medium-text">Cтабилизатор:</p>
                            <div class="radio-type">
                                <input class="input-radio" type="radio" name="gender" id="male">
                                <label class="second-text radio-second" for="male">Male</label>
                                <input class="input-radio" type="radio" name="gender" id="famale">
                                <label class="second-text" for="famale">Famale</label>
                            </div>
                        </div>
                    </div>
                    <div class="menu-availability"></div>
                </div>
                <div class="production__btn">
                    <a class="production__a" href="#production">Произвести за 10 монет</a>
                    <p class="second-text production__text">Для производства биоробота не хватает 2 биоруки, 3 микрочипа и 1 души</p>
                </div>
            </div>
            <div class="production__line-right"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.production {
    &__line {
        display: flex;
        margin-top: 36px;

        &-right {
            width: 236px;
            height: 320px;
            background-image: url('../assets/img/front_male.png');
            background-position: 0 -640px;
        }

        &-left {
            display: flex;
            flex-direction: column;
            margin-right: 36px;
        }
    }
    &__btn {
        display: flex;
        align-items: center;
        margin-top: 40px;
    }
    &__text {
        width: 195px;
        margin: 0;
    }
    &__a {
        padding: 10px 28px;
        border: 2px solid #4C5865;
        box-sizing: border-box;
        border-radius: 60px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #4C5865;
        text-decoration: none;
        height: 48px;
        margin-right: 24px;
    }
}
.radio-type {
    display: flex;
    align-items: center;
    margin-top: 16px;
}

.input-radio {
    margin: 0 8px 1px 0;
    border: 2px solid #A3B8CC;
    box-sizing: border-box;
}
.input-radio:checked {
    border: 2px solid #A3B8CC;
    box-sizing: border-box;
}

.radio-second {
    margin-right: 27px;
}

</style>