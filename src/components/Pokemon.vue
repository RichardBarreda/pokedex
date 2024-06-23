<template>
    <div class="pokemon-card-holder" v-for="pokemon in pokemons" :key="pokemon.id">
        <div class="details-holder">
            <p class="pokemon-name">{{pokemon.name}}</p>
            <div class="pokemon-type-group">
                <p class="pokemon-type">Electric</p>
                <p class="pokemon-type">Normal</p>
            </div>
        </div>
        <div class="img-holder">
            <img :src="pokemon.img" class="pokemon-img"/>
        </div>
    </div>
</template>
  



<script>
  export default {
    name: 'Pokemon',
    props:["pokemons"],
    data() {
        return {

        }
    }
  }
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pokemon-card-holder {
    height: 100px;
    width: 100%;
    max-width: 100%;
    display: flex;
    background-color: whitesmoke;
    justify-content: space-between;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    margin-bottom: 13px;
}

.pokemon-card-holder:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.img-holder {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.pokemon-type-group {
    display: flex;
}

.pokemon-type {
    margin-right: 10px;
}

.details-holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
}

.pokemon-name {
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
}

.pokemon-img {
    height: 170px;
    width: 100%;
    max-width: 100%;
}
</style>
  