#
# Makefile for simple archive management (1999.01.26) V C Hui
#

SHELL = /bin/sh

#
# directories
#
SRCDIR = .
TGZDIR = ../../
XFMDIR = ../xfm/pixmaps

#
# package parameters
#
VERSION = `cat ../VERSION`
DATE = `date +%Y%m%d.%H`
TGZ = $(TGZDIR)/pixmaps-$(DATE)-src.tgz
README= ../README.xfm.pixmaps

#
# shell commands
#
MV = \mv -f
RM = \rm -f
MKDIR = \mkdir -p
SXPM = \sxpm -nod

#
# targets
#
all:

dist:
	tar cvf - . | gzip -c9 > $(TGZ)

xfm:
	$(SXPM) m_broken.xpm -o xfm_blackhole.xpm
	$(SXPM) d_dir.xpm -o xfm_dir.xpm
	$(SXPM) d_dirlnk.xpm -o xfm_dirlnk.xpm
	$(SXPM) a_shell.xpm -o xfm_exec.xpm
	$(SXPM) a_execlnk.xpm -o xfm_execlnk.xpm
	$(SXPM) f_file.xpm -o xfm_file.xpm
	$(SXPM) f_archive.xpm -o xfm_files.xpm
	$(SXPM) d_dir.xpm -o xfm_icon.xpm
	$(SXPM) f_image.xpm -o xfm_image.xpm
	$(SXPM) f_symlnk.xpm -o xfm_symlnk.xpm
	$(SXPM) d_updir.xpm -o xfm_updir.xpm
	$(MKDIR) $(XFMDIR)
	$(MV) ./xfm_*.xpm $(XFMDIR)
	echo $(VERSION) [$(DATE)] V C Hui > $(README)
	echo >> $(README)
	echo "  replacement pixmaps for xfm" >> $(README)
	grep "SXPM.*-o" Makefile >> $(README)
	(cd $(XFMDIR) ; ln -sf ../$(README) README)

new:
	$(RM) zcolormap

zcolormap: new
	grep -h "c .*\"" *.xpm | cut -c 4- |\
	  sort | uniq > zcolormap

normal:

purge:
	$(RM) *~
