<template>
  <div>
    <h1 v-if="user">
      {{ user.id }}
    </h1>
    <div v-for="user in users">
      {{ user.id }}
    </div>
    <div>
      <button @click="register()"></button>
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
  },
  data() {
    return {
      username: "test-username",
      password: "test-password"
    }
  },
  methods: {
    register() {
      this.apollo.mutate({
        mutation: gql`
          mutation(
            $username: String!
            $password: String!
          ) {
            register(
              username: $username
              password: $password
            ) {
              token
            }
          }
        `,
        variables: {
          name: this.name,
          password: this.password

        }
      }).then(data => {
        console.log(data)
      })
    }
  }
}
</script>
