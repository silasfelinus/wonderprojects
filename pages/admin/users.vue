<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">User Manager</h1>

    <form @submit="addUser" class="mb-4">
      <input v-model="newUser.name" placeholder="Name" class="border p-2 mr-2 rounded" />
      <input v-model="newUser.email" placeholder="Email" class="border p-2 mr-2 rounded" />
      <button type="submit" class="bg-blue-500 text-white p-2 rounded">Add User</button>
    </form>

    <ul>
      <li v-for="user in userList" :key="user.id.toString()" class="mb-2">
        <input v-model="user.name" @blur="updateUser(user)" class="border p-2 mr-2 rounded" />
        <input v-model="user.email" @blur="updateUser(user)" class="border p-2 mr-2 rounded" />
        <button @click="deleteUser(user)" class="bg-red-500 text-white p-2 rounded">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { PrismaClient, user as UsersType } from '@prisma/client'

const prisma  = new PrismaClient()
const userList = ref<UsersType[]>([]);
const newUser = ref({
  name: '',
  email: ''
});

onMounted(async () => {
  userList.value = await prisma.user.findMany();
});

const addUser = async (event: Event) => {
  event.preventDefault();

  const user = await prisma.user.create({
    data: {
      name: newUser.value.name,
      email: newUser.value.email
    }
  } as any);

  userList.value.push(user);
  newUser.value.name = '';
  newUser.value.email = '';
};

const updateUser = async (user: UsersType) => {
  await prisma.user.update({
    where: { id: user.id },
    data: {
      name: user.name,
      email: user.email
    }
  });
};

const deleteUser = async (user: UsersType) => {
  await prisma.user.delete({
    where: { id: user.id }
  });

  userList.value = userList.value.filter(u => u.id !== user.id);
};
</script>
