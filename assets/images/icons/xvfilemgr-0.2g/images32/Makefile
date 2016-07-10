# Generated automatically from Makefile.in by configure.
# Makefile.in generated automatically by automake 1.2 from Makefile.am

# Copyright (C) 1994, 1995, 1996, 1997 Free Software Foundation, Inc.
# This Makefile.in is free software; the Free Software Foundation
# gives unlimited permission to copy, distribute and modify it.


SHELL = /bin/sh

srcdir = .
top_srcdir = ..
prefix = /usr/local
exec_prefix = ${prefix}

bindir = ${exec_prefix}/bin
sbindir = ${exec_prefix}/sbin
libexecdir = ${exec_prefix}/libexec
datadir = ${prefix}/share
sysconfdir = ${prefix}/etc
sharedstatedir = ${prefix}/com
localstatedir = ${prefix}/var
libdir = ${exec_prefix}/lib
infodir = ${prefix}/info
mandir = ${prefix}/man
includedir = ${prefix}/include
oldincludedir = /usr/include

pkgdatadir = $(datadir)/xvfilemgr
pkglibdir = $(libdir)/xvfilemgr
pkgincludedir = $(includedir)/xvfilemgr

top_builddir = ..

INSTALL = /usr/bin/install -c
INSTALL_PROGRAM = ${INSTALL}
INSTALL_DATA = ${INSTALL} -m 644
transform = s,x,x,

NORMAL_INSTALL = true
PRE_INSTALL = true
POST_INSTALL = true
NORMAL_UNINSTALL = true
PRE_UNINSTALL = true
POST_UNINSTALL = true
CC = gcc
CFLAGS = -pipe -g -Wall
DEFAULT_CP_CMD = /bin/cp
DEFAULT_EDITOR = /usr/openwin/bin/textedit
DEFAULT_MAILER = /bin/mail
DEFAULT_MV_CMD = /bin/mv
DEFAULT_RM_CMD = /bin/rm
HAVE_SLINGSHOT = yes
HAVE_XVIEW = yes
HAVE_XVIEW_PRIVATE_HEADERS = yes
PACKAGE = xvfilemgr
SLINGSHOT_CFLAGS =   -I/usr/openwin/include 
SLINGSHOT_LIBS =   -L/usr/openwin/lib 
VERSION = 0.2e ALPHA
XVIEW_CFLAGS =   -I/usr/openwin/include
XVIEW_LIBS =   -L/usr/openwin/lib
ac_my_xp = 
xvdep = xvdep
xvfilemgr_bindir = /usr/openwin/bin
xvfilemgr_libdir = /usr/openwin/lib/pixmaps
xvfilemgr_mandir = /usr/openwin/man

icon_FILES	= $(sort $(wildcard *.xpm) )
mkinstalldirs = $(SHELL) $(top_srcdir)/mkinstalldirs
CONFIG_HEADER = ../config.h
CONFIG_CLEAN_FILES = 
HEADERS =  $(HAVE_XVIEW_PRIVATE_HEADERS)

DIST_COMMON =  Makefile.in


DISTFILES = $(DIST_COMMON) $(SOURCES) $(HEADERS) $(TEXINFOS) $(EXTRA_DIST)

TAR = gtar
GZIP = --best
default: all

.SUFFIXES:

all:

install:
	list='$(icon_FILES)'; for filename in $$list; do \
	( $(INSTALL_DATA) $$filename $(xvfilemgr_libdir)/$$filename ); \
	echo $(xvfilemgr_libdir)/$$filename ; \
	done

clean:

distclean: clean
	$(RM) Makefile

# Tell versions [3.59,3.63) of GNU make to not export all variables.
# Otherwise a system limit (for SysV at least) may be exceeded.
.NOEXPORT:
