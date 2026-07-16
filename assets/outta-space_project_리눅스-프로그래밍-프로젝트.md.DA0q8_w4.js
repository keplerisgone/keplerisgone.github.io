import{_ as n,o as a,c as p,a0 as e}from"./chunks/framework.jwovEGr5.js";const m=JSON.parse('{"title":"리눅스 프로그래밍 프로젝트","description":"","frontmatter":{},"headers":[],"relativePath":"outta-space/project/리눅스-프로그래밍-프로젝트.md","filePath":"outta-space/project/리눅스-프로그래밍-프로젝트.md"}'),l={name:"outta-space/project/리눅스-프로그래밍-프로젝트.md"};function i(t,s,c,o,r,d){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="리눅스-프로그래밍-프로젝트" tabindex="-1">리눅스 프로그래밍 프로젝트 <a class="header-anchor" href="#리눅스-프로그래밍-프로젝트" aria-label="Permalink to &quot;리눅스 프로그래밍 프로젝트&quot;">​</a></h1><ul><li><a href="./mini-grep-제작하기">mini grep 제작하기</a></li><li>mini-cat 제작하기</li></ul><ol><li>mini-shell fork, exec, wait, pipe, redirection 구현</li><li>tiny HTTP server socket, bind, listen, accept, epoll 또는 select 사용</li><li>system monitor /proc 읽어서 CPU, memory, process 정보 출력</li><li>Linux device-like project GPIO 또는 가상 파일 기반으로 장치 제어 흉내</li><li>Raspberry Pi / BeagleBone / Debian VM 기반 서비스 C 프로그램을 systemd service로 등록하고 로그 남기기</li></ol><p>C로 Linux user-space 시스템 프로그램을 작성하고, 파일 디스크립터 / 프로세스 / pipe / socket / /proc / systemd를 직접 다뤄 포트폴리오로 설명 가능한 프로젝트 3~5개를 만든다.</p><p>매주 프로젝트가 끝나면 아래 질문에 답하세요.</p><ol><li>이 프로그램은 무슨 문제를 해결하는가?</li><li>어떤 Linux 개념을 사용했는가?</li><li>어떤 system call을 사용했는가?</li><li>gdb, valgrind, strace 중 무엇으로 검증했는가?</li><li>실패했던 버그는 무엇이었는가?</li><li>다음 버전에서 개선할 점은 무엇인가?</li></ol><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. printf와 write의 차이는 무엇인가?</span></span>
<span class="line"><span>2. file descriptor 0, 1, 2는 무엇인가?</span></span>
<span class="line"><span>3. fork 후 부모와 자식은 무엇을 공유하고 무엇이 다른가?</span></span>
<span class="line"><span>4. exec는 왜 반환하지 않는가?</span></span>
<span class="line"><span>5. waitpid를 안 하면 어떤 문제가 생기는가?</span></span>
<span class="line"><span>6. pipe는 왜 fd가 두 개인가?</span></span>
<span class="line"><span>7. dup2는 shell redirection에서 어떤 역할을 하는가?</span></span>
<span class="line"><span>8. socket-bind-listen-accept 흐름은 무엇인가?</span></span>
<span class="line"><span>9. /proc은 실제 파일인가?</span></span>
<span class="line"><span>10. systemd service의 ExecStart, Restart, User는 무엇인가?</span></span>
<span class="line"><span>11. journalctl로 내 프로그램 로그를 어떻게 보는가?</span></span>
<span class="line"><span>12. strace는 무엇을 보여주는가?</span></span></code></pre></div><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>필수:</span></span>
<span class="line"><span>1. mycat</span></span>
<span class="line"><span>2. mycp</span></span>
<span class="line"><span>3. mini-shell v1</span></span>
<span class="line"><span>4. mini-shell v2 redirection</span></span>
<span class="line"><span>5. mini-shell v3 pipe</span></span>
<span class="line"><span>6. echo-server</span></span>
<span class="line"><span>7. tiny-httpd</span></span>
<span class="line"><span>8. systemd service 등록</span></span>
<span class="line"><span></span></span>
<span class="line"><span>선택:</span></span>
<span class="line"><span>1. procmon 확장</span></span>
<span class="line"><span>2. fake-device</span></span>
<span class="line"><span>3. epoll</span></span>
<span class="line"><span>4. Yocto/Buildroot</span></span></code></pre></div><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>30분:</span></span>
<span class="line"><span>Beej C 또는 TLPI 일부 읽기</span></span>
<span class="line"><span></span></span>
<span class="line"><span>90분:</span></span>
<span class="line"><span>프로젝트 구현</span></span>
<span class="line"><span></span></span>
<span class="line"><span>30분:</span></span>
<span class="line"><span>gdb/valgrind/strace로 관찰</span></span>
<span class="line"><span></span></span>
<span class="line"><span>30분:</span></span>
<span class="line"><span>README 정리</span></span>
<span class="line"><span></span></span>
<span class="line"><span>30분:</span></span>
<span class="line"><span>복습 또는 리팩터링</span></span></code></pre></div>`,9)])])}const _=n(l,[["render",i]]);export{m as __pageData,_ as default};
