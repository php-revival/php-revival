import Extension from '@/Extension'
import RandomVideoAdder from '@/Adders/RandomVideoAdder'
import HomeLinksAdder from '@/Adders/HomeLinksAdder'
import SearchIconAdder from '@/Adders/SearchIconAdder'
import CopyButtonAdder from '@/Adders/CopyButtonAdder'
import CodeSampleModifier from '@/Modifiers/CodeSampleModifier'
import LogoModifier from '@/Modifiers/LogoModifier'
import HomeHeroModifier from '@/Modifiers/HomeHeroModifier'
import ContributeModifier from '@/Modifiers/ContributeModifier'

new Extension()
    .applyAdders([
        new RandomVideoAdder(),
        new HomeLinksAdder(),
        new SearchIconAdder(),
        new CopyButtonAdder(),
    ])
    .applyModifiers([
        new CodeSampleModifier(),
        new HomeHeroModifier(),
        new LogoModifier(),
        new ContributeModifier(),
    ])