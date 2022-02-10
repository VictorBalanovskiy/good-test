<template>
  <div class="container-main">
    <nav class="nav">
      <router-link to="/"><img src="./assets/img/Logo.png" alt="logo"></router-link>
      <a href="#production" class="nav__a">Произвести биоробота</a>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
    background: radial-gradient(82.33% 70.44% at 50% 0%, #26394D 0%, #212529 100%);
}
#app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #FFFFFF;
    }
    .h3-margin {
        margin-top: 116px;
        margin-bottom: 70px;
    }
    .info-text {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #FFFFFF;
    }
    .info-text-grey {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #A3B8CC;
    }
    .info-text-grey-500{
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #A3B8CC;
    }
    .text {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #A3B8CC;
    }
    .second-text {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #A3B8CC;
    }
    .medium-text {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    }
    
    .container-main {
        width: 1016px;
        margin: 0 auto;
    }

    .container-second {
        max-width: 756px;
        margin: 0 auto;
    }
}

.nav {
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    &__a {
        padding: 0 16px;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        text-decoration: none;
        border: 2px solid #FF7F22;
        box-sizing: border-box;
        border-radius: 60px;
        height: 48px;
        transition: 0.3s;
    }
    &__a:hover{
        background: #FF5722;
        border: 2px solid #FF5722;
        transition: 0.3s;
    }
    &__a:active{
        background: #FF7F22;
        border: 2px solid #FF7F22;
        transition: 0.3s;
    }
    &__a:disabled{
        color: #4C5865;
        border: 2px solid #4C5865;
        box-sizing: border-box;
    }
}
</style>
