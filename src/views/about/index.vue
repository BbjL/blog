<template>
  <div class="about-wrapper">
    <div class="about">
      <div class="avatar">
        <img src="@/assets/avatar.jpg" alt="BJl" />
      </div>
      <div class="main-wrapper">
        <div class="info">
          <h4>JIANLI BU</h4>
          <h3>卜建立</h3>
        </div>
        <div class="content">
          <p>
            毕业于某二本院校计算机系，多年前后端开发经验，熟练掌握
            JavaScript、TypeScript、Node.js、Vue、Electron、C#、ASP.NET、SQLServer、MongoDB
            等语言或技术，具备 Web 全栈独立开发能力。
            <br />
            爱好上网、游戏、技术研究，完美主义者，细节控。
          </p>
        </div>
      </div>
      <div class="footer">
        <a href=""><i class="iconfont icon-huaban88"></i> aaaaaaaaaaaaa</a>
        <span
          ><i class="iconfont icon-185078-emailmailstreamline"></i>
          eshengsky@163.com</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.about {
  position: relative;
  width: 700px;
  // height: 430px;
  padding: 30px;
  margin: 100px auto 250px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-image: $profileBg;
  color: $theme;
  @media (max-width: 568px) {
    width: 100%;
    margin-bottom: 40px;
    border-radius: 0;
  }
  .avatar {
    position: absolute;
    top: -57px;
    left: 50%;
    transform: translateX(-50%);
    border: 3px solid $theme;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 114px;
      height: 114px;
    }
  }
  .main-wrapper {
    padding-top: 55px;
    .info {
      h4 {
        height: 45px;
        margin-top: 24px;
        margin-bottom: 5px;
        font-size: 36px;
        font-weight: 300;
        color: inherit;
        text-align: center;
      }
      h3 {
        height: 40px;
        margin-top: 24px;
        margin-bottom: 16px;
        font-size: 32px;
        color: inherit;
        letter-spacing: 3px;
        text-align: center;
      }
    }
    .content {
      padding-top: 15px;
      min-height: 130px;
      p {
        font-size: 15px;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 16px;
    a {
      color: $theme;
      &:hover {
        color: $theme;
      }
    }
    @media (max-width: 568px) {
      display: block;
      a {
        display: block;
      }
      span {
        display: block;
      }
    }
  }
}
</style>
