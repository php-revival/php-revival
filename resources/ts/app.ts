import Extension from '@/classes/Extension'
import RandomVideoAdder from '@/classes/Adders/RandomVideoAdder'
import HomeLinksAdder from '@/classes/Adders/HomeLinksAdder'
import SearchIconAdder from '@/classes/Adders/SearchIconAdder'
import CodeSampleModifier from '@/classes/Modifiers/CodeSampleModifier'
import LogoModifier from '@/classes/Modifiers/LogoModifier'

new Extension()
    .applyAdders([
        new RandomVideoAdder(),
        new HomeLinksAdder(),
        new SearchIconAdder(),
    ])
    .applyModifiers([
        new CodeSampleModifier(),
        new LogoModifier(),
    ])