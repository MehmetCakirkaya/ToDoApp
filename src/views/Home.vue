<template>

</template>

<script>

export default {
  name: 'Home',
}
</script>

<style>

.text-area-1 button{
  padding: 10px;
  color: white;
  background: #E98074;
  width: 80px;
  border-radius: 10px;
  align-self: baseline;
  border: 0;
}

.text-container {
  display: flex;
  width: 100%;
  height: 97vh;
  padding: 15px;
  background: #EAE7DC;
}

.text-area-1 {
  width: 65%;
  height: 96%;
  margin: 10px;
  overflow: auto;
  background: white;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.text-area-1 textarea {
  width: 90%;
  height: 90%;
  overflow: auto;
  background: transparent;
  outline: 0;
  border: 0;
  resize: none;
}

.text-area-2 {
  width: 35%;
  height: 95%;
  margin: 10px;
  overflow: auto;
  background: #E98074;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-area-2 textarea {
  width: 90%;
  height: 90%;
  overflow: auto;
  background: transparent;
  outline: 0;
  border: 0;
  resize: none;
  color: white;
}

</style>
