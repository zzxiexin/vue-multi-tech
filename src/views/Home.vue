<template>
  <div class="home">
    <Button v-permit="'add'">增加</Button>
    <Button v-permit="'del'">删除</Button>
    <Button v-permit="'edit'">编辑</Button>
    <Button v-permit="'view'">查看</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import { directive } from "../directive";
directive(["add", "del"]);
export default {
  name: "Home"
};
</script>
