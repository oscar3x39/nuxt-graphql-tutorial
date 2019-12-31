<template>
  <div>
    <h1 v-if="user">
      {{ user.id }}
    </h1>
    <div v-for="user in users">
      {{ user.id }}
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    users: gql`
      {
        users {
          id
        }
      }
      `,
    user: gql`
      {
        user(id: 1) {
          id
        }
      }
      `
  }
}
</script>
