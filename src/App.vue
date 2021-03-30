<style>
    html,body{
        padding: 0;
        margin: 0;
    }
    .el-main{
        padding: 0;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>

<template>
    <el-container>
        <el-header>Header</el-header>
        <el-main>
            <el-carousel  type="card">
                <el-carousel-item v-for="item in items" :key="item">
                    <el-image
                            style="width: 100%;"
                            :src="item.url"
                            ></el-image>
                </el-carousel-item>
            </el-carousel>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        data:function () {
            return {
                items:[{url:"/src/assets/1.jpg"},{url:"/src/assets/1.jpg"},{url:"/src/assets/1.jpg"},{url:"/src/assets/1.jpg"}]
            }
        }
    }
</script>