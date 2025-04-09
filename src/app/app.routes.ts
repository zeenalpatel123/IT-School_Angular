import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HtmlHomeComponent } from './content/html/html-home/html-home.component';
import { HtmlIntroductionComponent } from './content/html/html-introduction/html-introduction.component';
import { HtmlComponent } from './content/html/html.component';
import { HtmlEditorsComponent } from './content/html/html-editors/html-editors.component';
import { HtmlBasicComponent } from './content/html/html-basic/html-basic.component';
import { HtmlElementsComponent } from './content/html/html-elements/html-elements.component';
import { HtmlAttributesComponent } from './content/html/html-attributes/html-attributes.component';
import { HtmlHeadingComponent } from './content/html/html-heading/html-heading.component';
import { HtmlParagraphsComponent } from './content/html/html-paragraphs/html-paragraphs.component';
import { HtmlStylesComponent } from './content/html/html-styles/html-styles.component';
import { HtmlFormattingComponent } from './content/html/html-formatting/html-formatting.component';
import { HtmlQuotationsComponent } from './content/html/html-quotations/html-quotations.component';
import { HtmlCommentsComponent } from './content/html/html-comments/html-comments.component';
import { HtmlColorsComponent } from './content/html/html-colors/html-colors.component';
import { HtmlCssComponent } from './content/html/html-css/html-css.component';
import { HtmlLinksComponent } from './content/html/html-links/html-links.component';
import { HtmlImagesComponent } from './content/html/html-images/html-images.component';
import { HtmlFaviconComponent } from './content/html/html-favicon/html-favicon.component';
import { HtmlPageTitleComponent } from './content/html/html-page-title/html-page-title.component';
import { HtmlTablesComponent } from './content/html/html-tables/html-tables.component';
import { HtmlListsComponent } from './content/html/html-lists/html-lists.component';
import { HtmlBlockInlineComponent } from './content/html/html-block-inline/html-block-inline.component';
import { HtmlDivComponent } from './content/html/html-div/html-div.component';
import { HtmlClassesComponent } from './content/html/html-classes/html-classes.component';
import { HtmlIdComponent } from './content/html/html-id/html-id.component';
import { HtmlIframesComponent } from './content/html/html-iframes/html-iframes.component';
import { HtmlJavascriptComponent } from './content/html/html-javascript/html-javascript.component';
import { HtmlFilePathsComponent } from './content/html/html-file-paths/html-file-paths.component';
import { HtmlHeadComponent } from './content/html/html-head/html-head.component';
import { HtmlLayoutComponent } from './content/html/html-layout/html-layout.component';
import { HtmlResponsiveComponent } from './content/html/html-responsive/html-responsive.component';
import { HtmlComputercodeComponent } from './content/html/html-computercode/html-computercode.component';
import { HtmlSemanticsComponent } from './content/html/html-semantics/html-semantics.component';
import { HtmlStyleGudieComponent } from './content/html/html-style-gudie/html-style-gudie.component';
import { HtmlEntitiesComponent } from './content/html/html-entities/html-entities.component';
import { HtmlSymbolsComponent } from './content/html/html-symbols/html-symbols.component';
import { HtmlEmojisComponent } from './content/html/html-emojis/html-emojis.component';
import { HtmlCharsetsComponent } from './content/html/html-charsets/html-charsets.component';
import { HtmlUrlEncodeComponent } from './content/html/html-url-encode/html-url-encode.component';
import { HtmlVsXhtmlComponent } from './content/html/html-vs-xhtml/html-vs-xhtml.component';
import { HtmlFormsComponent } from './content/html/html-forms/html-forms.component';
import { HtmlFormAttributesComponent } from './content/html/html-form-attributes/html-form-attributes.component';
import { HtmlFormElementsComponent } from './content/html/html-form-elements/html-form-elements.component';
import { HtmlInputTypesComponent } from './content/html/html-input-types/html-input-types.component';
import { HtmlInputAttributesComponent } from './content/html/html-input-attributes/html-input-attributes.component';
import { HtmlInputFormAttributesComponent } from './content/html/html-input-form-attributes/html-input-form-attributes.component';
import { HtmlCanvasComponent } from './content/html/html-canvas/html-canvas.component';
import { HtmlSvgComponent } from './content/html/html-svg/html-svg.component';
import { HtmlMediaComponent } from './content/html/html-media/html-media.component';
import { HtmlVideoComponent } from './content/html/html-video/html-video.component';
import { HtmlAudioComponent } from './content/html/html-audio/html-audio.component';
import { HtmlPlugInsComponent } from './content/html/html-plug-ins/html-plug-ins.component';
import { HtmlYoutubeComponent } from './content/html/html-youtube/html-youtube.component';
import { HtmlWebApisComponent } from './html-web-apis/html-web-apis.component';
import { HtmlGeolocationComponent } from './html-geolocation/html-geolocation.component';
import { HtmlDragDropComponent } from './html-drag-drop/html-drag-drop.component';
import { HtmlWebStorageComponent } from './html-web-storage/html-web-storage.component';
import { HtmlWebWorkersComponent } from './html-web-workers/html-web-workers.component';
import { HtmlSseComponent } from './html-sse/html-sse.component';

export const routes: Routes = [
    {
        path:'',
        component:ContentComponent,
        children:[
            {
                path:'',
                pathMatch:'full',
                redirectTo:'htmlhome'
            },
            {
                path:'html',
                component:HtmlComponent
            },
            {
                path:'htmlhome',
                component:HtmlHomeComponent
            },
            {
                path:'htmlintroduction',
                component:HtmlIntroductionComponent
            },
            {
                path:'htmleditors',
                component:HtmlEditorsComponent
            },
            {
                path:'htmlbasic',
                component:HtmlBasicComponent
            },
            {
                path:'htmlelements',
                component:HtmlElementsComponent
            },
            {
                path:'htmlattributes',
                component:HtmlAttributesComponent
            },
            {
                path:'htmlheadings',
                component:HtmlHeadingComponent
            },
            {
                path:'htmlparagraphs',
                component:HtmlParagraphsComponent
            },
            {
                path:'htmlstyles',
                component:HtmlStylesComponent
            },
            {
                path:'htmlformatting',
                component:HtmlFormattingComponent
            },
            {
                path:'htmlquotations',
                component:HtmlQuotationsComponent
            },
            {
                path:'htmlcomments',
                component:HtmlCommentsComponent
            },
            {
                path:'htmlcolors',
                component:HtmlColorsComponent
            },
            {
                path:'htmlcss',
                component:HtmlCssComponent
            },
            {
                path:'htmllinks',
                component:HtmlLinksComponent
            },
            {
                path:'htmlimages',
                component:HtmlImagesComponent
            },
            {
                path:'htmlfavicon',
                component:HtmlFaviconComponent
            },
            {
                path:'htmlpagetitle',
                component:HtmlPageTitleComponent
            },
            {
                path:'htmltables',
                component:HtmlTablesComponent
            },
            {
                path:'htmllists',
                component:HtmlListsComponent
            },
            {
                path:'htmlblockinline',
                component:HtmlBlockInlineComponent
            },
            {
                path:'htmldiv',
                component:HtmlDivComponent
            },
            {
                path:'htmlclasses',
                component:HtmlClassesComponent
            },
            {
                path:'htmlid',
                component:HtmlIdComponent
            },
            {
                path:'htmliframes',
                component:HtmlIframesComponent
            },
            {
                path:'htmljavascript',
                component:HtmlJavascriptComponent
            },
            {
                path:'htmlfilepaths',
                component:HtmlFilePathsComponent
            },
            {
                path:'htmlhead',
                component:HtmlHeadComponent
            },
            {
                path:'htmllayout',
                component:HtmlLayoutComponent
            },
            {
                path:'htmlresponsive',
                component:HtmlResponsiveComponent
            },
            {
                path:'htmlcomputercode',
                component:HtmlComputercodeComponent
            },
            {
                path:'htmlsemantics',
                component:HtmlSemanticsComponent
            },
            {
                path:'htmlstyleguide',
                component:HtmlStyleGudieComponent
            },
            {
                path:'htmlentities',
                component:HtmlEntitiesComponent
            },
            {
                path:'htmlsymbols',
                component:HtmlSymbolsComponent
            },
            {
                path:'htmlemojis',
                component:HtmlEmojisComponent
            },
            {
                path:'htmlcharacter',
                component:HtmlCharsetsComponent
            },
            {
                path:'htmlurlencode',
                component:HtmlUrlEncodeComponent
            },
            {
                path:'htmlvsxhtml',
                component:HtmlVsXhtmlComponent
            },
            {
                path:'htmlforms',
                component:HtmlFormsComponent
            },
            {
                path:'htmlformattributes',
                component:HtmlFormAttributesComponent
            },
            {
                path:'htmlformelements',
                component:HtmlFormElementsComponent
            },
            {
                path:'htmlinputtypes',
                component:HtmlInputTypesComponent
            },
            {
                path:'htmlinputattributes',
                component:HtmlInputAttributesComponent
            },
            {
                path:'htmlinputformattributes',
                component:HtmlInputFormAttributesComponent
            },
            {
                path:'htmlcanvas',
                component:HtmlCanvasComponent
            },
            {
                path:'htmlsvg',
                component:HtmlSvgComponent
            },
            {
                path:'htmlmedia',
                component:HtmlMediaComponent
            },
            {
                path:'htmlvideo',
                component:HtmlVideoComponent
            },
            {
                path:'htmlaudio',
                component:HtmlAudioComponent
            },
            {
                path:'htmlplugins',
                component:HtmlPlugInsComponent
            },
            {
                path:'htmlyoutube',
                component:HtmlYoutubeComponent
            },
            {
                path:'htmlwebapis',
                component:HtmlWebApisComponent
            },
            {
                path:'htmlgeolocation',
                component:HtmlGeolocationComponent
            },
            {
                path:'htmldragdrop',
                component:HtmlDragDropComponent
            },
            {
                path:'htmlwebstorage',
                component:HtmlWebStorageComponent
            },
            {
                path:'htmlwebworkers',
                component:HtmlWebWorkersComponent
            },
            {
                path:'htmlsse',
                component:HtmlSseComponent
            },
        ]
    }
];
