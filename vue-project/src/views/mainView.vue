

<template>
    <div class="big2">
        <div class="header">人员管理</div>
        <div class="operation">
            <div class="mb-4">
    
                <el-button type="primary" plain @click="dialogFormVisible = true">添加</el-button>
                <!-- <el-button type="primary">刷新</el-button> -->
    
            </div>
        </div>
        <el-dialog v-model="dialogFormVisible" title="添加" width="500" @clean="clean">
    <el-form :model="form" ref="modelForm" >
      <el-form-item label="姓名" :label-width="formLabelWidth" prop="cn">
        <el-input v-model="form.cn" autocomplete="off" />
      </el-form-item>
      <el-form-item label="学院" :label-width="formLabelWidth" prop="department">
        <el-input v-model="form.department" autocomplete="off" />
      </el-form-item>
      <el-form-item label="学号" :label-width="formLabelWidth" prop="description">
        <el-input v-model="form.description" autocomplete="off" />
      </el-form-item>
      <el-form-item label="班级" :label-width="formLabelWidth" prop="physicalDeliveryOfficeName">
        <el-input v-model="form.physicalDeliveryOfficeName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="账号" :label-width="formLabelWidth" prop="sAMAccountName">
        <el-input v-model="form.sAMAccountName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
        <el-input v-model="form.password" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
        <div class="content1">
                <el-table :data="DataList" height="550" style="width: 100%">
                <el-table-column prop="cn" label="姓名" width="180" />
                <el-table-column prop="department" label="学院" width="160" />
                <el-table-column prop="description" label="学号"  width="180"/>
                <el-table-column prop="physicalDeliveryOfficeName" label="班级" width="160" />
                <el-table-column prop="sAMAccountName" label="账号" width="180" />
                <el-table-column prop="userPrincipalName" label="UPN" width="180" />
                <el-table-column fixed="right" label="Operations" min-width="240">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleDelete(scope.$index, scope.row)">
          禁用
        </el-button>
        <el-button link type="primary" size="small" @click="handleStart(scope.$index, scope.row)">开启</el-button>
        <el-button link type="primary" size="small" @click="handleRemove(scope.$index, scope.row),dialogFormVisible1 = true">修改密码</el-button>
      </template>
    </el-table-column>
            </el-table>

          <el-dialog v-model="dialogFormVisible1" title="修改密码" width="500" @clean="clean1">
    <el-form :model="form1" ref="modelForm1">
      <el-form-item label="新密码" :label-width="formLabelWidth" prop="newpassword">
        <el-input v-model="form1.newpassword" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancel1">关闭</el-button>
        <el-button type="primary" @click="confirm1">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
            
        </div>
    </div>
    
</template>
<style>
.header{
  background-color: rgb(214, 212, 212);
  height: 40px;
  margin: 10px 0;
  line-height: 40px;
  padding-left: 10px;
  width: 100%;
}
.operation{
  background-color: rgb(214, 212, 212);
  height: 100px;
  margin: 10px 0;
  line-height: 100px;
  padding-left: 30px;
  width: 1200px;
  /* padding-top: 10px; */
}
.operation button{
    
    width: 200px;
    height: 60px;
}
.content1{
    margin-top: 30px;
    background-color: white;
    width: 100%;
}
</style>
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { ref,reactive } from "vue";
import { useList } from "@/composables/main"
import {removeListAPI,startListAPI,addListAPI,resetListAPI } from '@/api/main'
const { DataList } = useList()
DataList.value = [];

// console.log(DataList);

const handleDelete = (index, row) => {
  const formData = new FormData();
  formData.append('cn', row.cn); 
  removeListAPI(formData)
  console.log(row.cn)
}
const handleStart = (index, row) => {
  const formData = new FormData();
  formData.append('cn', row.cn); 
  startListAPI(formData)
  console.log(row.cn)
}

const dialogFormVisible = ref(false)
const dialogFormVisible1 = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  cn: '',
  department: '',
  description:'',
  physicalDeliveryOfficeName:'',
  sAMAccountName:'',
  password:'',
})

const form1 = reactive({
  newpassword:''
})


const modelForm = ref<FormInstance>();
const modelForm1 = ref<FormInstance>();
// 重置表单方法
const restForm = (formEl: FormInstance | undefined) => {
  formEl.resetFields();
};
const confirm=()=>{
  console.log(form);
  addListAPI(form)
  restForm(modelForm.value)
  dialogFormVisible.value = false;

}

const cancel=()=>{
  restForm(modelForm.value)
  dialogFormVisible.value = false;

}
const cancel1=()=>{
  restForm(modelForm1.value)
  dialogFormVisible1.value = false; // 将 isFormVisible 设置为 false
}

let hasCnData = false; // 标记是否已获取到 row.cn 数据
let cnData = null;     // 存储 row.cn 数据
let formData2 = null;   // 存储 form 数据
const handleRemove=(index, row)=>{
  cnData = row.cn; // 存储 row.cn 数据
  hasCnData = true; // 设置标记为已获取到 row.cn 数据
  // console.log(hasCnData);
  
}


const confirm1=()=>{
  formData2 = { ...form1 }; // 复制 form 对象（或根据需要处理）
  console.log('Form data:', formData2);
  // 检查是否已经有了 cnData，如果有了就调用 sendDataToAPI
  // console.log(hasCnData);
  
  if (hasCnData) {
    const combinedData = { ...formData2, cn: cnData };
        // 发送数据到 API
    console.log(combinedData);
    
    resetListAPI(combinedData);
    hasCnData = false; // 如果不需要再次等待 row.cn，可以重置
    cnData = null;     // 同上
    formData2 = null;   // 同上，但通常表单提交后不需要重置，除非有特定需求
  }

  dialogFormVisible1.value = false;
  restForm(modelForm.value)
}
</script>


