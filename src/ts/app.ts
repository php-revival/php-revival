import Extension from '@/Extension'
import RecommendedVideoAdder from '@/Adders/RecommendedVideoAdder'
import HomeLinksAdder from '@/Adders/HomeLinksAdder'
import SearchIconAdder from '@/Adders/SearchIconAdder'
import CopyButtonAdder from '@/Adders/CopyButtonAdder'
import CodeSampleModifier from '@/Modifiers/CodeSampleModifier'
import LogoModifier from '@/Modifiers/LogoModifier'
import HomeHeroModifier from '@/Modifiers/HomeHeroModifier'
import ContributeModifier from '@/Modifiers/ContributeModifier'
import ToggleCommentsModifier from '@/Modifiers/ToggleCommentsModifier'
import PlayButtonAdder from '@/Adders/PlayButtonAdder'
import BreadcrumbsArrowsAdder from '@/Adders/BreadcrumbsArrowsAdder'
import BrowserTypeAdder from '@/Adders/BrowserTypeAdder'

new Extension()
    .applyAdders([
        new BrowserTypeAdder(),
        new RecommendedVideoAdder(),
        new HomeLinksAdder(),
        new SearchIconAdder(),
        new CopyButtonAdder(),
        new PlayButtonAdder(),
        new BreadcrumbsArrowsAdder(),
    ])
    .applyModifiers([
        new CodeSampleModifier(),
        new HomeHeroModifier(),
        new LogoModifier(),
        new ContributeModifier(),
        new ToggleCommentsModifier(),
    ])