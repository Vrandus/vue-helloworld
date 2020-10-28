<template>
    <tr>
        <td>
            {{db.name}}
        </td>
        <td>
            {{db.location}}
        </td>
        <td>
            {{db.age}}
        </td>
        <td>
            {{db.bool}}
        </td>
        <button @click="$emit('remove', db.UUID)"> 
            X
        </button>
    </tr>

</template>

<script>
export default {
   props: {
       db: {
           type: Object,
           required: true
       }
   },
   methods : {

   }
}
</script>