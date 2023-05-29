<template >
  <div class="wrapper">

    <el-row :gutter="24">
      <el-col :span="24" :md="8">
        <div class="screen" ref="cartItems">
          <div class="app-bar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM338.7 395.9c6.6-5.9 7.1-16 1.2-22.6C323.8 355.4 295.7 336 256 336s-67.8 19.4-83.9 37.3c-5.9 6.6-5.4 16.7 1.2 22.6s16.7 5.4 22.6-1.2c11.7-13 31.6-26.7 60.1-26.7s48.4 13.7 60.1 26.7c5.9 6.6 16 7.1 22.6 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"/></svg>
          </div>
          <div class="title">快捷通道-投诉</div>
          <div class="cart-items">
            <transition-group name="cartList" tag="div">
              <div class="cart-item">
                <div class="left">
                  <div class="cart-image">
                    <div class="image-wrapper">
                      <img class="image" />
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="name">guoguo</div>
                  <div class="price">$11</div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
      </el-col>
      <el-col :span="24" :md="8">
        <div class="screen" ref="cartItems">
          <div class="app-bar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM338.7 395.9c6.6-5.9 7.1-16 1.2-22.6C323.8 355.4 295.7 336 256 336s-67.8 19.4-83.9 37.3c-5.9 6.6-5.4 16.7 1.2 22.6s16.7 5.4 22.6-1.2c11.7-13 31.6-26.7 60.1-26.7s48.4 13.7 60.1 26.7c5.9 6.6 16 7.1 22.6 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"/></svg>
          </div>
          <div class="title">快捷通道-投诉</div>
          <div class="cart-items">
            <transition-group name="cartList" tag="div">
              <div class="cart-item">
                <div class="left">
                  <div class="cart-image">
                    <div class="image-wrapper">
                      <img class="image" />
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="name">guoguo</div>
                  <div class="price">$11</div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
      </el-col>
      <el-col :span="24" :md="8">
        <div class="screen" ref="cartItems">
          <div class="app-bar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM338.7 395.9c6.6-5.9 7.1-16 1.2-22.6C323.8 355.4 295.7 336 256 336s-67.8 19.4-83.9 37.3c-5.9 6.6-5.4 16.7 1.2 22.6s16.7 5.4 22.6-1.2c11.7-13 31.6-26.7 60.1-26.7s48.4 13.7 60.1 26.7c5.9 6.6 16 7.1 22.6 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"/></svg>
          </div>
          <div class="title">快捷通道-投诉</div>
          <div class="cart-items">
            <transition-group name="cartList" tag="div">
              <div class="cart-item">
                <div class="left">
                  <div class="cart-image">
                    <div class="image-wrapper">
                      <img class="image" />
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="name">guoguo</div>
                  <div class="price">$11</div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
$white: var(--app-container-bg-color);
$yellow: var(--list-new-color);
$black: var(--app-color);

body {
  font-family: "Rubik", sans-serif;
  color: $black;
}
.app-bar{
  position: relative;
  width: 50px;
  height: 50px;
  padding: 12px 0;
}
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  padding: 50px 20px;
  margin: 0 auto;

  &::before {
    content: "";
    display: block;
    position: fixed;
    width: 300%;
    height: 100%;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    transform: translateX(-50%) skewY(-8deg);
    background-color: $yellow;
    animation: wave 8s ease-in-out infinite alternate;
  }

  @keyframes wave {
    0% {
      transform: translateX(-50%) skew(0deg, -8deg);
    }

    100% {
      transform: translateX(-30%) skew(8deg, -4deg);
    }
  }
}

.screen {
  background-color: $white;
  box-sizing: border-box;
  box-shadow: 0 3.2px 2.2px rgba(0, 0, 0, 0.02),
  0 7px 5.4px rgba(0, 0, 0, 0.028), 0 12.1px 10.1px rgba(0, 0, 0, 0.035),
  0 19.8px 18.1px rgba(0, 0, 0, 0.042), 0 34.7px 33.8px rgba(0, 0, 0, 0.05),
  0 81px 81px rgba(0, 0, 0, 0.07);
  border-radius: 30px;
  overflow-y: scroll;
  padding: 0 28px;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    background-color: $yellow;
    top: -20%;
    left: -50%;
    z-index: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  > .title {
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
    position: relative;
  }
}

.cart-items {
  position: relative;
}

.cart-item {
  display: flex;
  padding: 20px 0;

  > .right {
    > .name {
      font-size: 14px;
      font-weight: bold;
      line-height: 1.5;
      margin-bottom: 10px;
    }

    > .price {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    > .count {
      display: flex;
      align-items: center;

      > .number {
        font-size: 14px;
        margin: 0 14px;
        width: 20px;
        text-align: center;
      }

      .button {
        cursor: pointer;
        width: 28px;
        height: 28px;
        border-radius: 100%;
        background-color: #eee;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
        user-select: none;

        &:hover {
          background-color: #ddd;
        }
      }
    }
  }
}

.cart-image {
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background-color: #eee;
  margin-right: 34px;

  > .image-wrapper {
    > .image {
      display: block;
      width: 140%;
      transform: rotate(-28deg) translateY(-40px);
      filter: drop-shadow(0 30px 20px rgba(0, 0, 0, 0.2));
    }
  }
}

.buttonText-leave-active,
.buttonText-enter-active {
  transition: opacity 0.2s, top 0.35s;
}
.buttonText-leave-to,
.buttonText-enter {
  opacity: 0;
}

.cartList {
  &-enter {
    > .right {
      > .name,
      > .price {
        opacity: 0;
        transform: translateX(30px);
      }

      .count {
        opacity: 0;
      }
    }

    .cart-image {
      transform: scale(0);

      > .image-wrapper {
        transform: scale(0);
      }
    }
  }

  &-leave-active {
    transition: 0.7s cubic-bezier(0.79, 0.01, 0.22, 1);
    position: absolute;
  }

  &-leave-to {
    transform: scale(0);
    opacity: 0;
  }

  &-move {
    transition: 0.7s cubic-bezier(0.79, 0.01, 0.22, 1);
  }
}
</style>
