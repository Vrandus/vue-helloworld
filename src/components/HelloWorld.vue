<template>
  <div>
    Hello World   
    <div>
      <h1> Fill Out The Following Data </h1>
    </div> 
      <h3>Please enter your name:
          <input placeholder='Name' v-model='inputName'> </h3>
      <h3>Please enter location:
          <input placeholder='Location' v-model='inputLocation'> </h3>
      <h3>Please enter your age:
          <input placeholder='Age' v-model='inputAge'> </h3>
      <h3>Please enter :
          <input placeholder='Bool' v-model='inputBool'> </h3>

    <div>
      <button @click="addToList">send to db</button>
    </div>
    <div>
      <table class="center">
        <tr>
          <th>
            Name
          </th>
          <th>
            Location
          </th>
          <th>
            Age
          </th>
          <th>
            boolean
          </th>
        <tr/>
        <List 
          v-for="obj in db"
          :key="obj.UUID"
          :db="obj"
          @remove="removeFromList"
          />
      </table>
    </div>
  </div>


</template>

<script>
import List from './list.vue'
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/helloWorld");
export default {
  name: 'HelloWorld',
  components: { List },
  data : function() {
    return {
      inputName: "",
      inputLocation: "",
      inputAge: 0,
      inputBool: false,
      counter: 1,
      db :[
        {
          UUID: 1,
          name: "Ptailor",
          location: "btown",
          age: 2,
          bool: false
        }
      ]
    }
      },
  methods: {
    addToList ()  {
      // if(this.inputName != "" && this.inputLocation != "" && this.inputAge > 0){
        this.db.push({
          UUID: this.counter,
          name: this.inputName,
          location: this.inputLocation,
          age: this.inputAge,
          bool: this.inputBool
        })
        this.counter++
        
    },
      testing () {
        console.log("im working")
        console.log(this.inputName)
        console.log(this.inputLocation)
        console.log(this.inputAge)
        console.log(this.inputBool)
        console.log(this.db[0].name)
      },
      removeFromList (removeUUID) {
        this.db = this.db.filter( data => {
        return data.UUID !== removeUUID
      })
    }


  },
  
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 1rem 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 1rem 1rem 1rem 1rem;
}
.center {
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
}
</style>
