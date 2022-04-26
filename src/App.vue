<template>
  <div class="container-1">

    <div class="note-list-container">
      <div v-for="(val, id) in AllNotes" :key="id" class="note-list-item">
        <h2 @click="getCurrenNoteName($event)">{{val.title}}</h2>
        <p>{{val.content}}</p>
      </div>

      <div @click="openCreateNote($event)" class="note-list-item">
        <img src="../public/assets/media/add-item.png" alt="">
      </div>
    </div>

    <div class="text-container">
      <div class="text-area-1">
        <button @click="saveNotes()">Save</button>
        <textarea name="" id="" v-model="firstArea" cols="30" rows="10" placeholder="Start Writing..."></textarea>
      </div>
      <div class="text-area-2">
        <textarea name="" id="" v-model="secondArea" cols="30" rows="10" placeholder="Start Writing..."></textarea>
      </div>
    </div>

  </div>

  <div v-if="create" class="create-new-note">
    <div class="create-inside">
      <label for="title"><b>Title:</b> </label>
      <input v-model="createTitle" type="text" name="title" id="">
      <label for="content"><b>Content:</b> </label>
      <input v-model="createContent" type="text" name="content" id="">
      <button @click="CreateNewNote(createTitle, createContent)" >Create</button>
      <button style="margin-left: 15px" @click="create = false, this.createTitle = '', this.createContent = ''" >Close</button>
    </div>
  </div>

  <router-view/>
  
</template>

<script>
import {db} from './boot/firebase';

export default {
  name: 'App',
  data() {
    return{
      createTitle: "",
      createContent: "",
      create: false,
      AllNotes: [],
      currentNote: "",

      firstArea: "",
      secondArea: "",
      Notes: [],
    }
  },
  created() {
    db.collection('MyNotes')
    .get()
    .then((snap) => {
      snap.docs.forEach((doc) => {
        db.collection('MyNotes')
        .doc(doc.id)
        .get()
        .then((data) => {
          this.AllNotes.push(data.data());
          this.currentNote = this.AllNotes[0].title;

          db.collection('MyNotes')
          .doc(this.currentNote)
          .get()
          .then((snap) => {
            this.Notes = snap.data();
            this.firstArea = this.Notes.firstArea
            this.secondArea = this.Notes.secondArea
          });
        });          
      });
    });

    
  },
  methods: {
    CreateNewNote(a, b) {
      console.log(a, b);
      
      db.collection('MyNotes')
        .doc(this.createTitle)
        .set({
          title: this.createTitle,
          content: this.createContent,

        });

      this.create = false
      this.createTitle = ''
      this.createContent = ''
    },
    openCreateNote() {
      this.create = true
    },
    saveNotes() {
      db.collection('MyNotes')
      .doc(this.currentNote)
      .set({
        title: this.Notes.title,
        content: this.Notes.content,
        firstArea: this.firstArea,
        secondArea: this.secondArea,
      });
    },
    getCurrenNoteName(a) {
      this.currentNote = a.path[0].textContent,
      this.Notes = [],
      db.collection('MyNotes')
      .doc(this.currentNote)
      .get()
      .then((snap) => {
        this.Notes = snap.data();
        this.firstArea = this.Notes.firstArea
        this.secondArea = this.Notes.secondArea
      });

    },
  },
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.create-new-note {
  background: rgba(0, 0, 0, 0.192);
  display: flex;
  justify-content: center;
  z-index: 9;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
}

.create-inside {
  width: 350px;
  display: flex;
  height: 250px;
  border-radius: 15px;
  z-index: 99;
  background: #EAE7DC;
  padding: 10px;
  flex-wrap: wrap;
  align-items: center;
}

.create-inside input{
  width: 90%;
  padding: 15px;
  border: 0;
  outline: 0;
  border-radius: 10px;
  margin-bottom: 20px;
}

.create-inside label {
  float: left;
}

.hide {
  display: none;
}

.create-inside button {
  padding: 8px;
  width: 80px;
  outline: 0;
  border: 0;
  border-radius: 10px;
  background: #E98074;
  cursor: pointer;
}

.container-1 {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
}

.note-list-container {
  width: 350px;
  height: 97vh;
  background: #D8C3A5;
  padding: 15px;
  overflow: auto;
}

.note-list-item {
  width: 90%;
  margin: auto;
  padding: 15px;
  background: white;
  color: #8E8D8A;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 8px 8px 8px #0000003d;
}

.note-list-container h2 {
  text-align: center;
  cursor: pointer;
}

.note-list-item img {
  width: 120px;
  margin: auto;
  display: flex;
  cursor: pointer;
}

</style>
