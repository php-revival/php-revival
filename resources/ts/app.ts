import Extension from '@/Extension'
import RandomVideoAdder from '@/Adders/RandomVideoAdder'
import HomeLinksAdder from '@/Adders/HomeLinksAdder'
import SearchIconAdder from '@/Adders/SearchIconAdder'
import CodeSampleModifier from '@/Modifiers/CodeSampleModifier'
import LogoModifier from '@/Modifiers/LogoModifier'
import LogoAnimation from '@/Animations/LogoAnimation'

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
    .applyAnimations([
        new LogoAnimation(),
    ])