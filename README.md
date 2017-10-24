# UnravelingNg2
This is a git repo created as I have been working through Unraveling Angular 2.

The initial repo was deleted when I realized I had forgotten to ignore the book's downloaded source code.

The commit message will also deviate from the norm in that I often add anecdotal information when experimenting in order to help reinforce information that I've teased out & explain to myself (and others) what I was doing or experienced.

The sources here will deviate from the book for reasons of experimentation and the fact that I don't like the "do a,b,c, clone it all, do d,e, clone it all, do f..." approach.  I will merge the various topics into one app in the best way that I can think to do it at the time if & when it may change direction or motif.

Chapter 1 - (My01-03/) development was done exclusively in Visual Studio Code Build, start, run, & misc. Git commands were executed in both the in-app CLI & Linux CLI
Git commits were executed using both the VSC Source Control features & Linux CLI.

Chapter 2 - (My02-01/) was done exclusively in Atom Win v1.20 and on Linux with v 1.17 (until today when I upgraded to v.1.20.1) I tried using the GitPlus plugin, but the key bindings are missing/conflicted and it required(es) too
much use of the mouse preferred the command line only (on Linux or GitBash/Windows).

Chapter 3 - (My03-01/) I coded using Brackets v1.10 (& v1.11 that was released the night before I finished the chapter).  Brackets TS linting & code hinting was continually breaking.  I was really excited to try and familiarize myself with Brackets more & even took a 3hr introduction/overview course before starting the chapter, but found myself continually changing TypeScript support packages, wondering what was happening, refreshing or closing & restarting Brackets, and generally wanting to switch to something else.  v1.11 seems like it may have fixed some of the causes, but???  I will try some of Ch4 in it  though. =)

Chapter 4 - I don't remember much about Chapter 4 because there were a lot of discontinuities as I remember from the commits. Maybe that means I didn't learn much? Running the end result apps again; it was mostly swapping out synchronous behavior with promises and mock backends. However, the author re-wrote so much without showing it in the book, that I couldn't recreate it realistically, so i wsa glad t be done with it! 8b

I tried using Angular IDE for this chapter and found it rather frustrating. I spent all of one day's effort tracing down a bug due to an erroneous code completion that it suggested.

Chapter 5 - Was almost all talk. The code snippets/subjects were very focused so that there wasn't much for me to replicate in the reading. (The snippet of each subject ~5% of the example's code).  There wsan't really any IDE usage in this chapter, it was more referential.

Chapter 6 - Focused on dividing up an appication into modules & sharing the pieces amongst eachother. The it moved into Services which are generally shared/shareable by design, which then morphed into multiple examples of ways that a service's sharing can be modified & controlled throughout the app.  This chapter I used mostly Brackets, but also some Angular IDE, & Visual Studio Code (especially when I was having trouble reconciling my hybrid mashup of the chapter's examples & needed more/better error messages).

Chapter 7 - Components...

Chapter 8 - Forms
Built a form for submitting a DiveLogEntry first using the "Form Template" method, then converted the form to a
"Reactive Form" with custom multi-part validation for time & depth, then provided custom error messages for each
of the possible errors.
IDE(s) Atom 32bit on Win 8 & 64bit on Linux / ChaletOS
