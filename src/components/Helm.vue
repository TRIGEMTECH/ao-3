<template lang='pug'>

.helm
    img.gear(id='gear' @mouseover='imageMouseOver' @mouseleave='imageMouseLeave' @click.stop='$store.commit("toggleSettings")'  src='../assets/images/gear.svg')
    img.bull(id='bull' @mouseover='imageMouseOver' @mouseleave='imageMouseLeave' @click.stop='$store.commit("toggleNodeInfo")'  src='../assets/images/bull.svg')
    img.doge(id='doge' @mouseover='imageMouseOver' @mouseleave='imageMouseLeave' @click.stop='$store.commit("toggleAccounts")'  src='../assets/images/doge.svg')
    settings(@click.stop  v-if='$store.state.upgrades.showSettings').settings
    lightning(@click.stop  v-if='$store.state.upgrades.showNodeInfo').lightning
    accounts(@click.stop  v-if='$store.state.upgrades.showAccounts').accounts

</template>

<script>

import Settings from './Settings'
import Lightning from './Lightning'
import Accounts from './Accounts'

export default {
    components: {
        Settings, Lightning, Accounts
    },
    methods: {
        imageMouseOver(event){
            switch (event.target.id)
            {
                case 'doge':
                    if (this.$store.state.upgrades.showAccounts == false)
                        event.target.title = 'View Accounts'
                    else
                        event.target.title = 'Close View Accounts'
                break;

                case 'bull':
                    if (this.$store.state.upgrades.showNodeInfo == false)
                        event.target.title = 'View Transactions'
                    else
                        event.target.title = 'Close View Transactions'
                break;

                case 'gear':
                    if (this.$store.state.upgrades.showSettings == false)
                        event.target.title = 'View Settings'
                    else
                        event.target.title = 'Close View Settings'
                break;
            }
        },
        imageMouseLeave(event){
            event.target.title='';
        }        
    }
}

</script>

<style lang="stylus" scoped>

@import '../styles/grid';
@import '../styles/colours';

.hidden
    opacity: 0

img
    height: 3.3em
    position: fixed
    z-index: 9001
    cursor: pointer
    padding: .75em

.settings
    position: fixed
    z-index: 8009
    bottom: 0
    right: 0
    width: 89%
    background: lightGrey
    padding: 1.5em
    border-style: solid
    border-width: 4px
    border-color: main
.lightning
    position: fixed
    z-index: 8009
    top: 0
    right: 0
    width: 89%
    background: lightGrey
    padding: 1.5em
    border-style: solid
    border-width: 4px
    border-color: main
.accounts
    position: fixed
    z-index: 8009
    top: 0
    left: 0
    width: 89%
    background: lightGrey
    padding: 1.5em
    border-style: solid
    border-width: 4px
    border-color: main

.gear
    bottom: 0
    right: 0

.bull
    top: 0
    right: 0
    height: 3.3em

.doge
    top: 0
    left: 0
    height: 3.3em

.quarter
    display: inline-block
    width: 33%
    font-size: 6.44em
    color: lightGrey
    max-height: 2em
    margin-top: -0.35em;

.selected
    color: wrexgreen

.quarter:before
    content: "\2022";

.upg
    height: 2em
    pointer-events: none

.topcenter
    position: fixed
    top: 0
    left: 50%
    transform: translateX(-50%)
    width: 10em
    height: 2em
    max-width: 33%
    color: main
    padding-left: 2em
    padding-right: 2em
    padding-top: .29em
    padding-bottom: .29em
    z-index: 77777
    cursor: pointer

</style>