<template>
    <div class="big1">
    <div class="in">metabubble</div>
    <RouterLink to="/" class="in">首页</RouterLink>
    <RouterLink to="/main" class="in">人员管理</RouterLink>
    <RouterLink to="/login" class="in">退出登录</RouterLink>
</div>
</template>

<style>
.big1{
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    justify-content: center;
    text-align: center;
    background-color: rgb(104, 103, 103);
}
.big1 div{
    font-size: 30px;
    margin: 10px;
    height: 200px;
    line-height: 200px;
}
.in{
    width: 200px;
    height: 200px;
    font-size: 40px;
}

</style>