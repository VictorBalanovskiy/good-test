<template>
  <div class="factory">
    <div class="factory__left">
        <h1>Фабрика по производству биороботов</h1>
        <p class="info-text-grey">класса "монитор-кресло"</p>
    </div>
    <div class="factory__right"></div>
  </div>
</template>

<style scoped lang="scss">
    .factory {
        display: flex;
        margin-left: 132px;
        margin-top: 96px;
        h1 {
            font-weight: 600;
            font-size: 48px;
            line-height: 56px;
            color: #FFFFFF;
        }
        p {
            color: #A3B8CC
        }
        &__right {
            display: block;
            width: 366px;
            height: 320px;
            background-image: url("../assets/img/robots.png");
        }
        &__left {
            width: 496px;
        }
    }
</style>