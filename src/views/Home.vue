<template>
    <div class="home-container">
      <div class="container">
        <div class="content-wrapper">
          <div class="menu-holder">
            <Pokemon :pokemons="pokemons"></Pokemon>
          </div>
          <div class="display-holder"></div>
        </div>
      </div>
    </div>
</template>
  



<script>
  import Pokemon from '@/components/Pokemon.vue'
  export default {
    name: 'Home',
    components: {
      Pokemon
    },
    data() {
        return {
            pokemons:[
              {id:"1", img:require('../assets/1.png'), name:"Bulbasaur", primaryType:12, secondaryType:4, gen:1, isLegendary:false, isSelected:false},
              {id:"2", img:require('../assets/2.png'), name:"Ivysaur", primaryType:12, secondaryType:4, gen:1, isLegendary:false, isSelected:false},
              {id:"3", img:require('../assets/3.png'), name:"Venasaur", primaryType:12, secondaryType:4, gen:1, isLegendary:false, isSelected:false},
              {id:"4", img:require('../assets/4.png'), name:"Charmander", primaryType:10, secondaryType:0, gen:1, isLegendary:false, isSelected:false},
              {id:"5", img:require('../assets/5.png'), name:"Charmeleon", primaryType:10, secondaryType:0, gen:1, isLegendary:false, isSelected:false},
              {id:"6", img:require('../assets/6.png'), name:"Charizard", primaryType:10, secondaryType:3, gen:1, isLegendary:false, isSelected:false},
              {id:"7", img:require('../assets/7.png'), name:"Squirtle", primaryType:11, secondaryType:0, gen:1, isLegendary:false, isSelected:false},
              {id:"8", img:require('../assets/8.png'), name:"Wartortle", primaryType:11, secondaryType:0, gen:1, isLegendary:false, isSelected:false},
              {id:"9", img:require('../assets/9.png'), name:"Blastoise", primaryType:11, secondaryType:0, gen:1, isLegendary:false, isSelected:false},
            ]
        }
    }
  }
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-wrapper {
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 850px;
}

.menu-holder {
  height: 500px;
  width: 50%;
  background-color: gainsboro;
  margin-right: 10px;

  padding: 20px;

  overflow-y: scroll;
}

.display-holder {
  height: 500px;
  width: 50%;
  background-color: gainsboro;
  margin-left: 10px;
}

@media (max-width: 575.98px) {
  .content-wrapper {
    flex-direction: column;
  }

  .menu-holder {
    margin-right: 0px;
    width: 100%;
  }

  .display-holder {
    display: none;
  }
}
  
</style>
  