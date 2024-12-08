import Extension from '@/Extension'
import RecommendedVideoAdder from '@/Adders/Home/RecommendedVideoAdder'
import HomeLinksAdder from '@/Adders/Home/HomeLinksAdder'
import CopyButtonAdder from '@/Adders/CopyButtonAdder'
import CodeSampleModifier from '@/Modifiers/CodeSampleModifier'
import HomeHeroModifier from '@/Modifiers/HomeHeroModifier'
import ContributeModifier from '@/Modifiers/ContributeModifier'
import ToggleCommentsModifier from '@/Modifiers/ToggleCommentsModifier'
import SandboxButtonAdder from '@/Adders/SandboxButtonAdder'
import BreadcrumbsArrowsAdder from '@/Adders/BreadcrumbsArrowsAdder'
import BrowserTypeAdder from '@/Adders/BrowserTypeAdder'
import ShowPageModifier from '@/Modifiers/ShowPageModifier'

new Extension()
    .applyModifiers([
        new ShowPageModifier(),
        new CodeSampleModifier(),
        new HomeHeroModifier(),
        new ContributeModifier(),
        new ToggleCommentsModifier(),
    ])
    .applyAdders([
        new BrowserTypeAdder(),
        new HomeLinksAdder(),
        new CopyButtonAdder(),
        new SandboxButtonAdder(),
        new BreadcrumbsArrowsAdder(),
        new RecommendedVideoAdder(),
    ])
