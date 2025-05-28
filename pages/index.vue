<template>
  <div>
    <h1>{{ hello }}</h1>
    <h2>Users List:</h2>
    <div v-for="user in users" :key="user.id" class="user-item">
      <h3>{{ user.name }}</h3>
      <p>ID: {{ user.id }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
// 導入 graphql-tag 並重命名以避免 ESLint 警告
import * as graphqlTag from 'graphql-tag'
const gql = graphqlTag.default

export default {
  apollo: {
    // 查詢 hello 消息
    hello: gql`
      query {
        hello
      }
    `,
    // 查詢所有用戶
    users: gql`
      query {
        users {
          id
          name
          email
        }
      }
    `
  },
  data () {
    return {
      // 初始數據
    }
  }
}
</script>

<style scoped>
.user-item {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #3f51b5;
  margin-bottom: 24px;
}

h2 {
  color: #555;
  margin-bottom: 16px;
}

h3 {
  color: #333;
  margin-top: 0;
  margin-bottom: 8px;
}

p {
  margin: 4px 0;
  color: #666;
}
</style>
