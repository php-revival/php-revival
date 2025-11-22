import Extension from '@/Extension'
import RecommendedVideoAdder from '@/Adders/Home/RecommendedVideoAdder'
import HomeLinksAdder from '@/Adders/Home/HomeLinksAdder'
import CopyButtonAdder from '@/Adders/CopyButtonAdder'
import CodeSampleModifier from '@/Modifiers/CodeSampleModifier'
import HomeHeroModifier from '@/Modifiers/HomeHeroModifier'
import ContributeModifier from '@/Modifiers/ContributeModifier'
import ToggleCommentsModifier from '@/Modifiers/ToggleCommentsModifier'
import SandboxButtonAdder from '@/Adders/SandboxButtonAdder'
import RunCodeButtonModifier from '@/Modifiers/RunCodeButtonModifier'
import BreadcrumbsArrowsAdder from '@/Adders/BreadcrumbsArrowsAdder'
import BrowserTypeAdder from '@/Adders/BrowserTypeAdder'
import ThemeSwitchAdder from '@/Adders/ThemeSwitchAdder'
import ShowPageModifier from '@/Modifiers/ShowPageModifier'

new Extension()
    .applyModifiers([
        new ShowPageModifier(),
        new CodeSampleModifier(),
        new HomeHeroModifier(),
        new ContributeModifier(),
        new ToggleCommentsModifier(),
        new RunCodeButtonModifier(),
    ])
    .applyAdders([
        new CopyButtonAdder(),
        new BrowserTypeAdder(),
        new HomeLinksAdder(),
        new SandboxButtonAdder(),
        new BreadcrumbsArrowsAdder(),
        new RecommendedVideoAdder(),
        new ThemeSwitchAdder(),
    ])
